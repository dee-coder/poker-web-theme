import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Badge,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
  MixedWidget1,
  MixedWidget10,
  MixedWidget11,
  MixedWidget12,
  MixedWidget14,
  MixedWidget6,
} from "../../_metronic/_partials/widgets";
import { MixedWidgetCustom } from "./mixWidgetComponent";
import { TournamentHeader } from "./tournamentHeaderComponent";
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
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  list: {
    width: 1100,
  },
  viewBoxCont: {
    width: "auto",
  },
}));
const DrawerTournamentsView = ({
  setViewTournamentMode,
  obj,
  networks,
  currentAllot,
  playerInfo,
}) => {
  const classes = useStyles();
  const [url, seturl] = useState();

  useEffect(() => {
    console.log("this:", networks);
    var data = _.find(networks, ["name", obj.network]);
    console.log(data);
    // var url = "https://pokerswapping.com/networks/" + data.page_slug;
    // seturl(url);
  }, []);

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  if (localStorage.getItem("role") === "player") {
    return (
      <div className={classes.list}>
        <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
          <Container>
            <Row>
              <Col>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Tournament Details
                </Typography>
              </Col>
              <Col>
                <Row>
                  <Col lg={11}>
                    <a
                      href={`https://pokerswapping.com/tournament/${obj.sharkscope_id}`}
                      target="_blank"
                      style={{ float: "right" }}
                    >
                      {" "}
                      <Badge
                        variant="secondary"
                        style={{ fontSize: "12px", fontWeight: "200" }}
                      >
                        <i
                          class="fas fa-external-link-alt"
                          style={{ marginRight: "10px", fontSize: "12px" }}
                        />
                        Open in new page
                      </Badge>
                    </a>
                  </Col>
                  <Col lg={1}>
                    <Badge
                      variant="secondary"
                      style={{ float: "right" }}
                      onClick={() => setViewTournamentMode(false)}
                    >
                      {" "}
                      <i
                        style={{ float: "right", fontSize: "14px" }}
                        class="fas fa-times"
                      ></i>
                    </Badge>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col>
                {/* <TournamentHeader className="card-stretch gutter-b" obj={obj} /> */}
                <Box component="span" m={5}>
                  <Row style={{ marginTop: "10px" }}>
                    <Col lg={9}>
                      <TournamentHeader
                        className="card-stretch gutter-b"
                        obj={obj}
                        networks={networks}
                      />
                    </Col>

                    <Col lg={3}>
                      <Card>
                        <Card.Body>
                          <Link to={`/add-swap/${obj.sharkscope_id}`}>
                            <Button
                              variant="primary"
                              style={{
                                marginTop: "20px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "12px",
                              }}
                            >
                              Swapping{" "}
                              <i
                                class="fas fa-exchange-alt"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",

                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              ></i>
                            </Button>
                          </Link>
                          <br />
                          <Link to={`/sponsorship/create/${obj.sharkscope_id}`}>
                            <Button
                              variant="primary"
                              style={{
                                marginTop: "20px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "12px",
                              }}
                            >
                              Add sponsors{" "}
                              <i
                                class="fas fa-plus"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",
                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              ></i>
                            </Button>
                          </Link>
                          <br />
                          <Button
                            variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            View Live{" "}
                            <i
                              class="fas fa-tv"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}
                            ></i>
                          </Button>
                          <a href="#">
                            <Button
                              variant="primary"
                              style={{
                                marginTop: "20px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "12px",
                              }}
                            >
                              {obj.network}{" "}
                              <i
                                class="fas fa-external-link-alt"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",
                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}
                              ></i>
                            </Button>
                          </a>
                          <Button
                            variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            Add to calender{" "}
                            <i
                              class="fas fa-calendar-check"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}
                            ></i>
                          </Button>
                          <Button
                            variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            Share Tournament{" "}
                            <i
                              class="fas fa-share"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}
                            ></i>
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.list}>
        <div className={classes.viewBoxCont}>
          <Container>
            <Row>
              <Col style={{ padding: "30px" }}>
                <Form inline>
                  <h4>
                    {" "}
                    <Badge
                      variant="success"
                      style={{ fontSize: "12px", fontWeight: "200" }}
                    >
                      #{obj.sharkscope_id}
                    </Badge>
                  </h4>

                  <h4 style={{ marginLeft: "10px" }}>
                    {" "}
                    <Badge
                      variant="secondary"
                      style={{ fontSize: "12px", fontWeight: "200" }}
                    >
                      {obj.scheduledStartUnixTime*1000}
                    </Badge>
                  </h4>
                  <h4 style={{ marginLeft: "10px" }}>
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
                        date={new Date(obj.scheduledStartUnixTime*1000)}
                        renderer={renderer}
                      />
                    </Badge>
                  </h4>
                </Form>
              </Col>
              <Col style={{ padding: "30px" }}>
                <Row>
                  <Col lg={11}>
                    <a
                      href={`https://pokerswapping.com/apply-sponsorship?id=${obj.sharkscope_id}&player=${playerInfo.player_id}`}
                      target="_blank"
                      style={{ float: "right" }}
                    >
                      {" "}
                      <Badge
                        variant="secondary"
                        style={{ fontSize: "12px", fontWeight: "200" }}
                      >
                        <i
                          class="fas fa-external-link-alt"
                          style={{ marginRight: "10px", fontSize: "12px" }}
                        />
                        Open in new page
                      </Badge>
                    </a>
                  </Col>
                  <Col lg={1}>
                    <Badge
                      variant="secondary"
                      style={{ float: "right" }}
                      onClick={() => setViewTournamentMode(false)}
                    >
                      {" "}
                      <i
                        style={{ float: "right", fontSize: "14px" }}
                        class="fas fa-times"
                      ></i>
                    </Badge>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "0px" }}>
              <Col>
                {/* <TournamentHeader className="card-stretch gutter-b" obj={obj} /> */}

                <Row style={{ marginTop: "0px" }}>
                  <Col lg={12}>
                    <div
                      className={classes.root}
                      style={{ marginBottom: "25px" }}
                    >
                      <Row style={{ paddingBottom: "20px" }}>
                        <Col lg={12}>
                          <div
                            className=" card bg-light-primay rounded "
                            style={{ padding: "20px" }}
                          >
                            <Row style={{ marginTop: "0px" }}>
                              <Col>
                                <Typography variant="h4">
                                  {" "}
                                  <strong>{obj.name}</strong>
                                </Typography>
                                <br />
                                <span className="text-muted font-weight-bold">
                                  {obj.network}
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
                                <span className="text-muted font-weight-bold">
                                  {obj.overlay}
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
                                  {obj.game}
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
                                  {obj.state}
                                </span>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "20px" }}>
                        <Col lg={12}>
                          <div
                            className=" card bg-light-primay rounded "
                            style={{ padding: "20px" }}
                          >
                            {/* <Row>
                          <Col lg={6}>
                            <Badge variant="success">
                              #{obj.sharkscope_id}{" "}
                            </Badge>
                          </Col>
                          <Col lg={6}>
                            <Form
                              inline
                              style={{ textAlign: "right", float: "right" }}
                            >
                              <Badge variant="primary">
                                <i
                                  class="far fa-calendar"
                                  style={{
                                    color: "#fff",
                                    fontSize: "12px",
                                    marginRight: "5px",
                                  }}
                                ></i>

                                {getDates(obj.scheduledStartTime)}
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
                                  date={new Date(obj.scheduledStartTime)}
                                  renderer={renderer}
                                />
                              </Badge>
                            </Form>
                          </Col>
                        </Row> */}
                            <Row style={{ marginTop: "0px" }}>
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
                                  {playerInfo.player_name}
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
                                  {playerInfo.player_email}
                                </Typography>
                              </Col>
                              <Col lg={6}>
                                <Row>
                                  <Col lg={6}>
                                    <div style={{ textAlign: "left" }}>
                                      <Typography
                                        variant="button"
                                        style={{ color: "#848484" }}
                                      >
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
                                        style={{
                                          fontWeight: "900",
                                          color: "#F64E60",
                                        }}
                                      >
                                        0
                                      </Typography>{" "}
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div style={{ textAlign: "left" }}>
                                      <Typography
                                        variant="button"
                                        style={{ color: "#848484" }}
                                      >
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
                                        style={{
                                          fontWeight: "900",
                                          color: "black",
                                        }}
                                      >
                                        {currentAllot.number_of_sponsor}
                                      </Typography>{" "}
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row style={{ marginTop: "20px" }}>
                              <Col lg={12}>
                                <Typography
                                  variant="body1"
                                  style={{ color: "#848484" }}
                                >
                                  <strong>{playerInfo.player_name}</strong> is
                                  looking for{" "}
                                  <strong>
                                    {currentAllot.number_of_sponsor}
                                  </strong>{" "}
                                  sponsors to swap this tournaments{" "}
                                  <strong>{currentAllot.total_parcent}%</strong>{" "}
                                  of winning amount.
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
                                  {currentAllot.percent_to_each}
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
                                  {currentAllot.total_parcent}
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
                                  {obj.currency} {currentAllot.amount_of_each}
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
                                  {obj.currency} {currentAllot.total_amount}
                                </span>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>{" "}
                      <Row style={{ marginTop: "20px" }}>
                        <Col lg={12}>
                          <div
                            className=" card bg-light-primay rounded "
                            style={{ padding: "20px" }}
                          >
                            <Row>
                              <Col lg={12}>
                                <Form inline>
                                  <Link
                                    to={`/be-sponsor/${currentAllot.sponsorship_id}`}
                                  >
                                    <Button
                                      variant="primary"
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        fontSize: "12px",
                                      }}
                                    >
                                      Sponsor Game{" "}
                                      <i
                                        class="fas fa-plus"
                                        style={{
                                          color: "#FFF",
                                          marginLeft: "15px",
                                          fontSize: "13px",
                                          float: "right",
                                          marginRight: "15px",
                                        }}
                                      ></i>
                                    </Button>
                                  </Link>

                                  <a href={url} style={{ marginLeft: "20px" }}>
                                    <Button
                                      variant="primary"
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {obj.network}{" "}
                                      <i
                                        class="fas fa-external-link-alt"
                                        style={{
                                          color: "#FFF",
                                          marginLeft: "15px",
                                          fontSize: "13px",
                                          float: "right",
                                          marginRight: "15px",
                                        }}
                                      ></i>
                                    </Button>
                                  </a>
                                </Form>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
};

export default DrawerTournamentsView;
