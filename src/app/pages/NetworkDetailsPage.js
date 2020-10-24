import { Box, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import API from "../../apiUrl.json";
import renderHTML from "react-render-html";
import { Col, Row } from "react-bootstrap";

const NetworkDetailsPage = (props) => {
  const [data, setData] = useState("");
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
        console.log(json);
        setData(json.result.content);
      });
  });
  return (
    <Box>
      <Row>
        <Col lg={9}>
          <Paper style={{ padding: "50px" }}>
            <div>{renderHTML(data)}</div>
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
