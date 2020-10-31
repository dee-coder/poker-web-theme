import { Box, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import API from "../../apiUrl.json";
import { Col, Row } from "react-bootstrap";
const SuccessSubscription = (props) => {
  const query = queryString.parse(props.location.search);
  //console.log(query);
  const [res, setRes] = useState();
  useEffect(() => {
    fetch(API.baseUrl + API.getSessionRes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: query.id,
        plan_id: query.plan,
        userid: query.uid,
        type: query.type,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        var sessionData = document.getElementById("session-data");
        sessionData.innerText = JSON.stringify(json, null, 2);
        //setRes(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      <Paper style={{ padding: "30px" }}>
        <Row>
          <Col>
            {" "}
            <h3>
              <span>
                {" "}
                <i
                  class="fas fa-check-circle"
                  style={{ color: "green" }}
                ></i>{" "}
                Thank you!{" "}
              </span>
            </h3>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <pre className="json" id="session-data"></pre>
          </Col>
        </Row>
      </Paper>
    </Box>
  );
};

export default SuccessSubscription;
