import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { Row, Col, Card } from "react-bootstrap";
import API from "../../../apiUrl.json";
const ViewProfilePlayer = (props) => {
  const [PlayerName, setPlayerName] = useState("Deepak");
  const [ProfileData, setProfileData] = useState({});
  const [Redirect404, setRedirect404] = useState(false);

  useEffect(() => {
    if (props.match.params.id === undefined) {
      setRedirect404(true);
    } else {
      fetch(API.baseUrl + API.getPlayerProfile, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((json) => json.json())
        .then((response) => {
          setProfileData(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Typography variant="h4" style={{ color: "#FFF" }}>
            {PlayerName}'s profile
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
    </Box>
  );
};

export default ViewProfilePlayer;
