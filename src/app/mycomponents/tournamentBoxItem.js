import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Card, Badge, Row, Col, Button, Form } from "react-bootstrap";
import MailIcon from "@material-ui/icons/Mail";
import AddToCalendar from "react-add-to-calendar";
import Countdown from "react-countdown";
import _ from "lodash";
import { Link } from "react-router-dom";

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
const BoxItem = ({ obj, setViewTournamentMode, networks }) => {
  const [redirect, setRedirect] = useState("");
  //console.log(networks);
  useEffect(() => {
    var url = "";
    Promise.all(
      networks.map((n) => {
        if (n.name === obj.network) {
          url = n.page_slug;
        }
      })
    );
    //console.log(url);
    setRedirect(url);
  });
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
    <div className={classes.root} style={{ marginTop: "25px" }}>
      <Paper className={classes.paper}>
        {" "}
        <div className="bg-light-primay rounded " style={{ padding: "20px" }}>
          <Row>
            <Col lg={6}>
              <Badge variant="success">#{obj.sharkscope_id}</Badge>
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
                  {getDates(obj.scheduledStartUnixTime)}
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
                    date={getDates(obj.scheduledStartUnixTime)}
                    renderer={renderer}
                  />
                </Badge>
              </Form>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <a
                onClick={() => setViewTournamentMode(obj)}
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                {obj.name}
              </a>
              <br />
              <span className="text-muted font-weight-bold">{obj.network}</span>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col>
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
            <Col>
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
            <Col>
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
            <Col>
              <label>
                TOTAL ENTRANTS{" "}
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
                {obj.totalEntrants}
              </span>
            </Col>
            <Col>
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

          <Row style={{ marginTop: "25px" }}>
            <Col lg={12}>
              <Form inline style={{ float: "left" }}>
                <a
                  href={`https://pokerswapping.com/network/${redirect}`}
                  target="_blank"
                >
                  <Button variant="primary">
                    {obj.network}{" "}
                    <i
                      style={{ fontSize: "12px", marginLeft: "5px" }}
                      class="fas fa-external-link-alt"
                    ></i>
                  </Button>
                </a>
                <Button style={{ marginLeft: "20px" }} variant="primary">
                  Get Sponsors
                </Button>

                <Button
                  style={{ marginLeft: "20px" }}
                  variant="primary"
                  onClick={() => setViewTournamentMode(obj)}
                >
                  More info{" "}
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-info"
                  ></i>
                </Button>
                {/* <Bautton variant={"secondary"} style={{ marginLeft: "25px" }}>
                  Add To Calender
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-calendar-check"
                  ></i>
                </Button> */}
                <AddToCalendar event={state.event} />
              </Form>
            </Col>
          </Row>
        </div>
      </Paper>
    </div>
  );
};

export default BoxItem;
