import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  Col,
  Row,
  Form,
  Button,
  Image,
  ButtonGroup,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import Countdown from "react-countdown";

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
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  list: {
    width: 800,
  },
  viewBoxCont: {
    width: "auto",
  },
}));

const DrawerTournamentSponsorshipView = ({
  openDrawer,
  setOpenDrawer,
  networks,
  tournamentInfo,
  tournamentBattingInfo,
  pendingSponsorList,
  approvedSponsorList,
}) => {
  const [url, setUrl] = useState();
  //const [networks, setNetworks] = useState([]);

  useEffect(() => {
    console.log(approvedSponsorList, "List1");
    var data = _.find(networks, ["name", tournamentInfo.network]);

    var url = "https://pokerswapping.com/networks/" + data.page_slug;
    setUrl(url);
  }, []);
  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
        <Row>
          <Col>
            <Badge
              variant="secondary"
              style={{ float: "right" }}
              onClick={() => setOpenDrawer(false)}
            >
              {" "}
              <i
                style={{ float: "right", fontSize: "14px" }}
                class="fas fa-times"
              ></i>
            </Badge>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <Badge variant="success">
                      #{tournamentInfo.sharkscope_id}{" "}
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

                        {getDates(tournamentInfo.scheduledStartTime)}
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
                          date={new Date(tournamentInfo.scheduledStartTime)}
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
                      // onClick={(e) => {
                      //   setCurrentTournamentShowtournamentInfo(tournamentInfo);
                      //   setViewTournamentDetails(true);
                      // }}
                    >
                      {tournamentInfo.name}
                    </a>
                    <br />
                    <span className="text-muted font-weight-bold">
                      {tournamentInfo.network}
                    </span>
                  </Col>
                </Row>
                <Row style={{ padding: "20px" }}>
                  <div clasName="col-auto">
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
                        {approvedSponsorList.length}
                      </Typography>{" "}
                    </div>
                  </div>
                  <div className="col-auto" style={{ marginLeft: "20px" }}>
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
                        {tournamentBattingInfo.number_of_sponsor}
                      </Typography>{" "}
                    </div>
                  </div>
                  <div className="col-auto" style={{ marginLeft: "20px" }}>
                    <div style={{ textAlign: "left" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        REQUESTS{" "}
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
                        style={{ fontWeight: "900", color: "gray" }}
                      >
                        {pendingSponsorList.length}
                      </Typography>{" "}
                    </div>
                  </div>
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
                      {tournamentInfo.currency}
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
                      {tournamentInfo.guarantee}
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
                    <span className="text-muted font-weight-bold">
                      {tournamentInfo.overlay}
                    </span>
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
                    <span className="text-muted font-weight-bold">
                      {tournamentInfo.game}
                    </span>
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
                    <span className="text-muted font-weight-bold">
                      {tournamentInfo.state}
                    </span>
                  </Col>
                </Row>

                {tournamentBattingInfo !== null && (
                  <div>
                    <Row style={{ marginTop: "30px" }}>
                      <Col lg={12}>
                        <span className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                          Sponsors tournamentBattingInfoment
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
                          {tournamentBattingInfo.number_of_sponsor}
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
                          {tournamentBattingInfo.percent_to_each} %
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
                          {tournamentBattingInfo.total_parcent} %
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
                          {parseFloat(tournamentBattingInfo.amount_of_each)}
                        </span>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "25px" }}>
                      <Col lg={12}>
                        <Form inline style={{ float: "left" }}>
                          <a href={url}>
                            <Button variant="primary">
                              {tournamentInfo.network}{" "}
                              <i
                                style={{
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-external-link-alt"
                              ></i>
                            </Button>
                          </a>

                          <Button
                            style={{ marginLeft: "20px" }}
                            variant="primary"
                          >
                            More info{" "}
                            <i
                              style={{
                                fontSize: "12px",
                                marginLeft: "5px",
                              }}
                              class="fas fa-info"
                            ></i>
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col>
            <Typography variant="h6">Pending Requests</Typography>
          </Col>
        </Row>
        {pendingSponsorList.length === 0 && (
          <Typography variant="body" style={{ color: "#c4c4c4" }}>
            {" "}
            No pending requests found for this tournament.{" "}
          </Typography>
        )}
        {pendingSponsorList.map((sponsor) => {
          return (
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <div className="card" style={{ padding: "20px" }}>
                  <Row>
                    <Col>
                      <Image
                        src="media/users/100_4.jpg"
                        roundedCircle
                        style={{ width: "40px", height: "40px" }}
                      />
                      <Typography
                        variant="body"
                        style={{ fontSize: "13px", marginLeft: "15px" }}
                      >
                        {sponsor.sponsor_name}
                      </Typography>
                      <div style={{ float: "right" }}>
                        <Button
                          variant="outline-primary"
                          style={{ border: "none" }}
                        >
                          Reject{" "}
                        </Button>
                        <Button
                          variant="primary"
                          style={{ marginLeft: "20px" }}
                        >
                          Accept
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}

        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col>
            <Typography variant="h6">Sponsoring</Typography>
          </Col>
        </Row>
        {pendingSponsorList.length === 0 && (
          <Typography variant="body" style={{ color: "#c4c4c4" }}>
            {" "}
            No sponsor is sponsoring for this tournament.{" "}
          </Typography>
        )}
        {approvedSponsorList.map((sponsor) => {
          console.log(sponsor);
          return (
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <div className="card" style={{ padding: "20px" }}>
                  <Row>
                    <Col>
                      <Image
                        src="media/users/100_4.jpg"
                        roundedCircle
                        style={{ width: "40px", height: "40px" }}
                      />
                      <Typography
                        variant="body"
                        style={{ fontSize: "13px", marginLeft: "15px" }}
                      >
                        {sponsor.sponsor_name}
                      </Typography>
                      <div style={{ float: "right" }}>
                        <Button
                          variant="outline-primary"
                          style={{ border: "none" }}
                        >
                          Reject{" "}
                        </Button>
                        <Button
                          variant="primary"
                          style={{ marginLeft: "20px" }}
                        >
                          Chat
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default DrawerTournamentSponsorshipView;
