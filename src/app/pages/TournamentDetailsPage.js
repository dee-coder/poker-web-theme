import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MixedWidgetCustom } from "../mycomponents/mixWidgetComponent";
import { TournamentHeader } from "../mycomponents/tournamentHeaderComponent";
import API from "../../apiUrl.json";
import queryString from "query-string";

const TournamentDetailsPage = (props) => {
  const [id, setId] = useState("");
  const [network, setNetwork] = useState("");
  const [details, setDetails] = useState({});
  useEffect(() => {
    var info = props.match.params;
    setId(info.id);
    //setNetwork(info.network);
    // console.log(
    //   API.baseUrl +
    //     API.getTournamentById +
    //     "?id=" +
    //     info.id +
    //     "&network=" +
    //     info.network
    // );

    fetch(API.baseUrl + API.getTournamentById + "?id=" + info.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDetails(json.result);
      });
  }, []);
  if (id === "") {
    return (
      <div>
        <Typography variant="h1">Something went wrong</Typography>
      </div>
    );
  } else {
    return (
      <Box component="span" m={5}>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={9}>
            <TournamentHeader className="card-stretch gutter-b" obj={details} />
          </Col>

          <Col lg={3}>
            <Paper style={{ height: "90%" }}></Paper>
          </Col>
        </Row>
      </Box>
    );
  }
};

export default TournamentDetailsPage;
