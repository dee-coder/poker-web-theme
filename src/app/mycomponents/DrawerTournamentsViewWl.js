import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import AddToCalendar from "react-add-to-calendar";
import {
  Row,
  Col,
  Container,
  Badge,
  Form,
  Button,
  Card,
  Modal,
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
import ReactShareSocial from "react-share-social";

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

const DrawerTournamentsViewWl = ({
  setViewTournamentMode,
  obj,
  networks,
  currentAllot,
  playerInfo,
  showModal,
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

  let event = {
    title: "Sample Event",
    description: "This is the sample event provided as an example only",
    location: "Portland, OR",
    startTime: "2016-09-16T20:15:00-04:00",
    endTime: "2016-09-16T21:45:00-04:00",
  };

  
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
                  }}>
                  Tournament Details
                </Typography>
              </Col>
              <Col>
                <Row>
                  <Col lg={11}>
                    <a
                      href={`https://pokerswapping.com/tournament/${obj.sharkscope_id}`}

                      target="_blank"
                      style={{ float: "right" }}>
                      {" "}
                      <Badge
                        variant="secondary"
                        style={{ fontSize: "12px", fontWeight: "200" }}>
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
                      onClick={() => setViewTournamentMode(false)}>
                      {" "}
                      <i
                        style={{ float: "right", fontSize: "14px" }}
                        class="fas fa-times"></i>
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
                          {/* <Link to={`/add-swap/${obj.sharkscope_id}`}>
                            <Button
                              variant="primary"
                              style={{
                                marginTop: "20px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "12px",
                              }}>
                              Swapping{" "}
                              <i
                                class="fas fa-exchange-alt"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",

                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}></i>
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
                              }}>
                              Add sponsors{" "}
                              <i
                                class="fas fa-plus"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",
                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}></i>
                            </Button>
                          </Link> */}
                          <br />
                          <Button
                            variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}>
                            View Live{" "}
                            <i
                              class="fas fa-tv"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}></i>
                          </Button>
                          <a href="#">
                            <Button
                              variant="primary"
                              style={{
                                marginTop: "20px",
                                width: "100%",
                                textAlign: "center",
                                fontSize: "12px",
                              }}>
                              {obj.network}{" "}
                              <i
                                class="fas fa-external-link-alt"
                                style={{
                                  color: "#FFF",
                                  marginLeft: "15px",
                                  fontSize: "13px",
                                  float: "right",
                                  marginRight: "15px",
                                }}></i>
                            </Button>
                          </a>
                          {/* <Button
                            variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}>
                            Add to calender{" "}
                            <i
                              class="fas fa-calendar-check"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}></i>
                          </Button> */}
                          {/* <Button
                            // variant="primary"
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                              color: "white",
                            }}> */}
                            <div  style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}>
                              <AddToCalendar event={event} 
                                 displayItemIcons={false} 
                              />
                            </div>
                          {/* </Button> */}

                          <Button
                            variant="primary"
                            onClick={(e) => showModal(e)}
                            // onClick={() => setViewTournamentMode(false)}
                            style={{
                              marginTop: "20px",
                              width: "100%",
                              textAlign: "center",
                              fontSize: "12px",
                            }}>
                            Share Tournament{" "}
                            <i
                              class="fas fa-share"
                              style={{
                                color: "#FFF",
                                marginLeft: "15px",
                                fontSize: "13px",
                                float: "right",
                                marginRight: "15px",
                              }}></i>
                          </Button>

                          {/* <ReactShareSocial
                            url="url_to_share.com"
                            socialTypes={[
                              "facebook",
                              "twitter",
                              "reddit",
                              "linkedin",
                            ]}
                          /> */}
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
 
};

export default DrawerTournamentsViewWl;
