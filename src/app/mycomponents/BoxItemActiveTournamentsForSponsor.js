import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Card, Badge, Row, Col, Button, Form } from "react-bootstrap";
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

const BoxItemActiveTournamentsForSponsor = ({
  obj,
  allot,
  playerInfo,
  setCurrentTournamentObj,
  currentTournamentObj,
  setViewTournamentMode,
  setCurrentAllotDetails,
  setCurrentPlayerInfo,
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
          setCurrentTournamentObj(obj);
          setCurrentAllotDetails(allot);
          setCurrentPlayerInfo(playerInfo);
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
              <a
                href={`/player/profile/${playerInfo.player_id}`}
                target="_blank"
                style={{ color: "inherit" }}
              >
                <Typography variant="h6">{playerInfo.player_name}</Typography>
              </a>

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
                {playerInfo.player_email}
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
                      {allot.number_of_sponsor}
                    </Typography>{" "}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col lg={12}>
              <Typography variant="body1" style={{ color: "#848484" }}>
                <strong>{playerInfo.player_name}</strong> is looking for{" "}
                <strong>{allot.number_of_sponsor}</strong> sponsors to swap this
                tournaments <strong>{allot.total_parcent}%</strong> of winning
                amount.
              </Typography>
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
                {allot.percent_to_each}
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
                {allot.total_parcent}
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
                {obj.currency} {allot.amount_of_each}
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
                {obj.currency} {allot.total_amount}
              </span>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <a className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                {obj.name}
              </a>
              <br />
              <span className="text-muted font-weight-bold">{obj.network}</span>
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
                {obj.guarantee}
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
              <span className="text-muted font-weight-bold">{obj.overlay}</span>
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
              <span className="text-muted font-weight-bold">{obj.game}</span>
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
              <span className="text-muted font-weight-bold">{obj.state}</span>
            </Col>
          </Row>

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

export default BoxItemActiveTournamentsForSponsor;