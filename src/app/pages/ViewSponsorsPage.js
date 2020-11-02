import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import API from "../../apiUrl.json";
import Countdown from "react-countdown";

import { Button, Col, Row, Form, Badge, Spinner } from "react-bootstrap";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    //return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}
        {" day(s) "}
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const ViewSponsorsPage = (props) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [firstTimeSuccessBox, setFirstTimeSuccessBox] = useState(false);
  const [tournamentData, setTournamentData] = useState({});
  const [tournamentId, setTournamentId] = useState();

  useEffect(() => {
    const queries = queryString.parse(props.location.search);
    console.log(queries);
    setTournamentId(queries.id);

    if (JSON.parse(localStorage.getItem("userInfo")) === null) {
      setRedirectToLogin(true);
    } else {
      if (
        queries.status === undefined ||
        queries.status === null ||
        queries.status === ""
      ) {
        setFirstTimeSuccessBox(false);
      } else if (queries.status === "new") {
        setFirstTimeSuccessBox(true);
      }
      fetch(API.baseUrl + API.getSponsoredDetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: queries.id }),
      })
        .then((res) => res.json())
        .then((json) => {
          //console.log(json);
          setTournamentData(json.tounamentData);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  return (
    <Box>
      {redirectToLogin && <Redirect to="/login-new" />}

      <Row>
        <Col lg={8}>
          {firstTimeSuccessBox && (
            <Paper style={{ marginBottom: "20px" }}>
              <Row style={{ padding: "20px" }}>
                <Col lg={12}>
                  <Typography variant="h6">
                    <i
                      class="far fa-check-circle"
                      style={{ color: "green", marginRight: "20px" }}
                    ></i>
                    You have alloted sponsors successfully to this tournament.
                    <i
                      class="fas fa-times"
                      style={{ color: "gray", float: "right" }}
                      onClick={() => setFirstTimeSuccessBox(false)}
                    ></i>
                  </Typography>
                </Col>
              </Row>
            </Paper>
          )}
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6">
                  Add Sponsors to{" "}
                  <a
                    href={`https://pokerswapping.com/details/${tournamentId}`}
                    className="text-hover-primary"
                  >
                    #{tournamentId}
                  </a>
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col></Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={4}>
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6" gutterBottom>
                  Tournamant Details{" "}
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={6}>
                    <Badge variant="secondary" style={{ float: "left" }}>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: "600" }}
                      >
                        {getDates(tournamentData.scheduledStartTime)}
                      </Typography>
                    </Badge>
                  </Col>
                  <Col lg={6}>
                    <Badge variant="danger" style={{ float: "right" }}>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: "600" }}
                      >
                        <i
                          class="far fa-clock"
                          style={{
                            color: "#fff",
                            fontSize: "12px",
                            marginRight: "5px",
                          }}
                        ></i>
                        <Countdown
                          style={{ float: "right" }}
                          date={new Date(tournamentData.scheduledStartTime)}
                          renderer={renderer}
                        />
                      </Typography>
                    </Badge>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <Col>
                    <Typography variant="h5" gutterBottom>
                      {" "}
                      {tournamentData.name}
                    </Typography>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <Col>
                    <Typography variant="button" gutterBottom>
                      {" "}
                      {tournamentData.network}
                    </Typography>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col lg={4}>
                    <div style={{ textAlign: "left" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Overlay
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.overlay}{" "}
                      </Typography>{" "}
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ textAlign: "center" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Rake
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.rake}
                      </Typography>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ textAlign: "right" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Stake
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.stake}
                      </Typography>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <Typography variant="body1" style={{ textAlign: "left" }}>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Proin eget tortor risus. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui.
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Box>
  );
};

export default ViewSponsorsPage;
