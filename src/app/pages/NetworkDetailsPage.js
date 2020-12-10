import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import API from "../../apiUrl.json";
import renderHTML from "react-render-html";
import { Col, Image, Row } from "react-bootstrap";

const NetworkDetailsPage = (props) => {
  const [data, setData] = useState("");
  const [content, setContent] = useState("");
  const [bannerTop, setBannerTop] = useState();
  const [bannerBottom, setBannerBottom] = useState();
  useEffect(() => {
    var data = props.match.params;
    var body = { slug: data.slug };
    fetch(API.baseUrl + API.getNetworkDetails, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);

        setData(json.network);
        setBannerTop(json.network.banners[0].path);
        setBannerBottom(json.network.banners[1].path);
        setContent(json.network.details.content);

        //console.log(content);
      });
  }, []);
  return (
    <Box>
      <Row style={{ marginBottom: "40px" }}>
        <Col lg={12} style={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Network Details
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <Paper style={{ padding: "50px" }}>
            <Row>
              <Col lg={12} style={{ overflow: "hidden" }}>
                <Image
                  src={bannerTop}
                  rounded
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
              <Col lg={12}>
                <div>{renderHTML(content)}</div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} style={{ overflow: "hidden" }}>
                {" "}
                <Image
                  src={bannerBottom}
                  rounded
                  style={{
                    maxHeight: "200px",
                    maxWidth: "100%",
                    minWidth: "100%",
                  }}
                />
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={3}>
          <Paper style={{ height: "100%", width: "100%", padding: "50px" }}>
            <p>This is sidebar.</p>
          </Paper>
        </Col>
      </Row>
    </Box>
  );
};

export default NetworkDetailsPage;
