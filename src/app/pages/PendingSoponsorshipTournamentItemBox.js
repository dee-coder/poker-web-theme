import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Card, Badge, Row, Col, Button, Form, Image } from "react-bootstrap";
import MailIcon from "@material-ui/icons/Mail";
import AddToCalendar from "react-add-to-calendar";
import Countdown from "react-countdown";
import ReactStars from "react-rating-stars-component";

const Completionist = () => <span>This tournament has been finished.</span>;
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

const PendingSponsorshipTournamentItemBox = (
  tournamentInfo,
  bettingInfo,
  playerInfo,
  sponsoringList
) => {
  console.log(tournamentInfo);
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
    <div className={classes.root} style={{ marginBottom: "25px" }}>
      {" "}
      <div
        className=" card bg-light-primay rounded "
        style={{ padding: "20px" }}
      >
        <Row>
          <Col lg={6}>
            <Badge variant="success">
              #{tournamentInfo.tournamentInfo.sharkscope_id}{" "}
            </Badge>
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

                {getDates(tournamentInfo.tournamentInfo.scheduledStartTime)}
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
                  date={
                    new Date(tournamentInfo.tournamentInfo.scheduledStartTime)
                  }
                  renderer={renderer}
                />
              </Badge>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={2}>
            <Avatar
              alt="Remy Sharp"
              src="/media/images/avatar/1.jpg"
              style={{
                margin: "10px",
                width: "50px",
                height: "50px",
                float: "left",
              }}
            />
          </Col>
          <Col lg={4}>
            <Typography variant="h6">
              {tournamentInfo.playerInfo.player_name}
            </Typography>

            <ReactStars
              style={{ float: "left" }}
              count={5}
              value={5}
              size={12}
              edit={false}
              activeColor="#ffd700"
            />
            <Typography
              variant="subtitle2"
              style={{ marginTop: "5px", color: "#848484" }}
            >
              {tournamentInfo.playerInfo.player_email}
            </Typography>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    SPONSORING{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "900", color: "#F64E60" }}
                  >
                    0
                  </Typography>{" "}
                </div>
              </Col>
              <Col lg={6}>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    TOTAL{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "900", color: "black" }}
                  >
                    {tournamentInfo.bettingInfo.number_of_sponsor}
                  </Typography>{" "}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col lg={12}>
            <div className="d-flex align-items-center mb-9 bg-light-warning rounded p-5">
              <span className="svg-icon svg-icon-warning mr-5 svg-icon-lg">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Navigation/Check.svg")}
                ></SVG>
              </span>

              <div className="d-flex flex-column flex-grow-1 mr-2">
                <span className="font-weight-normal text-dark-75  font-size-lg mb-1">
                  You have already applied to be a sponsor in this tournament.
                  Please wait while player review your application and aprove
                  your sponsorship.
                </span>
                <span className="text-muted font-weight-bold">
                  {tournamentInfo.bettingInfo.created_date}
                </span>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col lg={3}>
            <label>
              EACH (%){" "}
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
              {tournamentInfo.bettingInfo.percent_to_each}
            </span>
          </Col>
          <Col lg={3}>
            <label>
              TOTAL (%){" "}
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
              {tournamentInfo.bettingInfo.total_parcent}
            </span>
          </Col>
          <Col lg={3}>
            <label>
              BID AMOUNT{" "}
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
              {tournamentInfo.tournamentInfo.currency}{" "}
              {bettingInfo.amount_of_each}
            </span>
          </Col>
          <Col lg={3}>
            <label>
              TOTAL AMOUNT{" "}
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
              {tournamentInfo.tournamentInfo.currency}{" "}
              {bettingInfo.total_amount}
            </span>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            <a className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
              {tournamentInfo.tournamentInfo.name}
            </a>
            <br />
            <span className="text-muted font-weight-bold">
              {tournamentInfo.tournamentInfo.network}
            </span>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
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
              {tournamentInfo.tournamentInfo.guarantee}
            </span>
          </Col>
          <Col lg={3}>
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
            <span className="text-muted font-weight-bold">
              {tournamentInfo.tournamentInfo.overlay}
            </span>
          </Col>
          <Col lg={3}>
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
            <span className="text-muted font-weight-bold">
              {tournamentInfo.tournamentInfo.game}
            </span>
          </Col>
          <Col lg={3}>
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
            <span className="text-muted font-weight-bold">
              {tournamentInfo.tournamentInfo.state}
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PendingSponsorshipTournamentItemBox;
