import { Box, Paper, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Card, Badge, Row, Col, Button, Form } from "react-bootstrap";
import MailIcon from "@material-ui/icons/Mail";
import AddToCalendar from "react-add-to-calendar";
import Countdown from "react-countdown";
import API from "../../apiUrl.json";

const Completionist = () => <span>Finished</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
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

const BoxItemActiveTournaments = ({
  obj,
  setViewAddSponsorsMode,
  setCurrentAllot,
  allot,
  setViewTournamentDetails,
  setCurrentTournamentShowObj,
  setViewTournamentMode,
}) => {
  const timerComponents = [];
  const classes = useStyles();
  let state = {
    event: {
      title: "Sample Event",
      description: "This is the sample event provided as an example only",
      location: "Portland, OR",
      startTime: "2016-09-16T20:15:00-04:00",
      endTime: "2016-09-16T21:45:00-04:00",
    },
  };

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  return (
    <a>
      <div
        className={classes.root}
        style={{ marginBottom: "25px" }}
        onClick={() => {
          setCurrentTournamentShowObj(obj);
          setViewTournamentMode(true);
        }}
      >
        {" "}
        <div
          className=" card bg-light-primay rounded "
          style={{ padding: "20px" }}
        >
          <Row>
            <Col lg={6}>
              <Badge variant="success">#{obj.sharkscope_id} </Badge>
            </Col>
            <Col lg={6}>
              <Form inline style={{ textAlign: "right", float: "right" }}>
                <Badge variant="primary">
                  <i
                    class="far fa-calendar"
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  ></i>

                  {getDates(obj.scheduledStartUnixTime * 1000)}
                </Badge>
                <Badge
                  variant="danger"
                  style={{
                    marginLeft: "10px",
                    color: "#FFF",
                    fontWeight: "600",
                  }}
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
                    date={new Date(obj.scheduledStartUnixTime * 1000)}
                    renderer={renderer}
                  />
                </Badge>
              </Form>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <a
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                onClick={(e) => {
                  setCurrentTournamentShowObj(obj);
                  setViewTournamentDetails(true);
                }}
              >
                {obj.name}
              </a>
              <br />
              <span className="text-muted font-weight-bold">{obj.network}</span>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col lg={3}>
              <label>
                CURRENCY{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj.currency}
              </span>
            </Col>
            <Col lg={3}>
              <label>
                GUARENTEE{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj.guarantee}
              </span>
            </Col>
            <Col lg={2}>
              <label>
                OVERLAY{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">{obj.overlay}</span>
            </Col>
            <Col lg={2}>
              <label>
                GAME{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">{obj.game}</span>
            </Col>
            <Col lg={2}>
              <label>
                STATE{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">{obj.state}</span>
            </Col>
          </Row>

          {/* <Row style={{ marginTop: "30px" }}>
            <Col>
              <Typography variant="body">
                [ {allot.lenght} Sponsorship ✅ ]
              </Typography>
            </Col>
          </Row> */}

          {/* {allot !== null && (
          <div>
            <Row style={{ marginTop: "30px" }}>
              <Col lg={12}>
                <span className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                  Sponsors Allotment
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col lg={3}>
                <label>
                  NUMBER OF SPONSORS{" "}
                  <i
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-info-circle"
                  ></i>
                </label>
                <br />
                <span className="text-muted font-weight-bold">
                  {allot.number_of_sponsor}
                </span>
              </Col>
              <Col lg={3}>
                <label>
                  SPONSORING{" "}
                  <i
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-info-circle"
                  ></i>
                </label>
                <br />
                <span className="text-muted font-weight-bold">0</span>
              </Col>
              <Col lg={2}>
                <label>
                  PERCENTAGE{" "}
                  <i
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-info-circle"
                  ></i>
                </label>
                <br />
                <span className="text-muted font-weight-bold">
                  {allot.percent_to_each} %
                </span>
              </Col>
              <Col lg={2}>
                <label>
                  TOTAL{" "}
                  <i
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-info-circle"
                  ></i>
                </label>
                <br />
                <span className="text-muted font-weight-bold">
                  {allot.total_parcent} %
                </span>
              </Col>
              <Col lg={2}>
                <label>
                  AMOUNT{" "}
                  <i
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-info-circle"
                  ></i>
                </label>
                <br />
                <span className="text-muted font-weight-bold">
                  {parseFloat(allot.amount_of_each)}
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: "25px" }}>
              <Col lg={12}>
                <Form inline style={{ float: "left" }}>
                  <Button variant="primary">
                    {obj.network}{" "}
                    <i
                      style={{ fontSize: "12px", marginLeft: "5px" }}
                      class="fas fa-external-link-alt"
                    ></i>
                  </Button>

                  <Button style={{ marginLeft: "20px" }} variant="primary">
                    More info{" "}
                    <i
                      style={{ fontSize: "12px", marginLeft: "5px" }}
                      class="fas fa-info"
                    ></i>
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        )}
        {allot === null && (
          <Row style={{ marginTop: "25px" }}>
            <Col lg={12}>
              <Form inline style={{ float: "left" }}>
                <Button variant="primary">
                  {obj.network}{" "}
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-external-link-alt"
                  ></i>
                </Button>
                <Button
                  style={{ marginLeft: "20px" }}
                  variant="primary"
                  onClick={() => {
                    setViewAddSponsorsMode(true);
                    setCurrentAllot(obj);
                  }}
                >
                  Add Sponsors
                  <i
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                    class="fas fa-plus"
                  ></i>
                </Button>

                <Button style={{ marginLeft: "20px" }} variant="primary">
                  More info{" "}
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-info"
                  ></i>
                </Button>

                <Button variant={"secondary"} style={{ marginLeft: "25px" }}>
                  Add To Calender
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-calendar-check"
                  ></i>
                </Button> 
                <AddToCalendar event={state.event} />
              </Form>
            </Col>
          </Row>
        )} */}
        </div>
      </div>
    </a>
  );
};

export default BoxItemActiveTournaments;
