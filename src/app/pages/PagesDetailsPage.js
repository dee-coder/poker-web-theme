import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import API from "../../apiUrl.json";
import renderHTML from "react-render-html";
import { Col, Row } from "react-bootstrap";

const PagesDetailsPage = (props) => {
  const [content, setContent] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    var data = props.match.params;
    var body = { slug: data.slug };
    fetch(API.baseUrl + API.getPageDetails, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        setContent(json.page.content);
        setData(json.page);
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
            Pages
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <Paper style={{ padding: "50px" }}>
            <div>{renderHTML(content)}</div>
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

export default PagesDetailsPage;
