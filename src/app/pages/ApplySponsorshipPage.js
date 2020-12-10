import React, { useState, useEffect } from "react";
import queryString from "query-string";
import API from "../../apiUrl.json";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Avatar, Box, Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import _ from "lodash";

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
const ApplySponsorshipPage = (props) => {
  const [tournamentId, setTournamentId] = useState();
  const [playerID, setPlayerID] = useState();
  const [playerInfo, setPlayerInfo] = useState({});
  const [tournamentInfo, setTournamentInfo] = useState({});
  const [bettingInfo, setBettingInfo] = useState({});
  const [url, seturl] = useState();
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    // console.log("running");
    // console.log(props);
    var info = queryString.parse(props.location.search);
    setPlayerID(info.player);
    fetch(API.baseUrl + API.getSponsorshipInfo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: info.id, player: info.player }),
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setBettingInfo(json.res.betttingInfo);
        setPlayerInfo(json.res.playerInfo);
        setTournamentInfo(json.res.tournamentInfo);
        setNetworks(json.res.networks);
        var data = _.find(json.res.networks, [
          "name",
          json.res.tournamentInfo.network,
        ]);
        //console.log(data);
        var url = "https://pokerswapping.com/networks/" + data.page_slug;
        seturl(url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Row style={{ marginBottom: "40px" }}>
        <Col lg={12} style={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Apply Sponsorship
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px", paddingBottom: "20px" }}>
        <Col>
          <Row style={{ marginTop: "0px" }}>
            <Col lg={12}>
              <div style={{ marginBottom: "25px" }}>
                <Row style={{ paddingBottom: "20px" }}>
                  <Col lg={12}>
                    <div
                      className=" card bg-light-primay rounded "
                      style={{ padding: "20px" }}
                    >
                      <Row>
                        <Col>
                          <Form inline>
                            <h4>
                              {" "}
                              <Badge
                                variant="success"
                                style={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                #{tournamentInfo.sharkscope_id}
                              </Badge>
                            </h4>

                            <h4 style={{ marginLeft: "10px" }}>
                              {" "}
                              <Badge
                                variant="secondary"
                                style={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                {tournamentInfo.scheduledStartTime}
                              </Badge>
                            </h4>
                          </Form>
                        </Col>
                        <Col>
                          <Row>
                            <Col lg={12}>
                              {" "}
                              <Badge
                                variant="danger"
                                style={{
                                  marginLeft: "10px",
                                  color: "#FFF",
                                  fontWeight: "600",
                                  float: "right",
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
                                    new Date(tournamentInfo.scheduledStartTime)
                                  }
                                  renderer={renderer}
                                />
                              </Badge>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "20px" }}>
                        <Col>
                          <Typography variant="h4">
                            {" "}
                            <strong>{tournamentInfo.name}</strong>
                          </Typography>
                          <br />
                          <span className="text-muted font-weight-bold">
                            {tournamentInfo.network}
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
                            {tournamentInfo.guarantee}
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
                            {tournamentInfo.overlay}
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
                            {tournamentInfo.game}
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
                            {tournamentInfo.state}
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
                            style={{
                              marginTop: "5px",
                              color: "#848484",
                            }}
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
                                  {bettingInfo.number_of_sponsor}
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
                            <strong>{playerInfo.player_name}</strong> is looking
                            for <strong>{bettingInfo.number_of_sponsor}</strong>{" "}
                            sponsors to swap this tournaments{" "}
                            <strong>{bettingInfo.total_parcent}%</strong> of
                            winning amount.
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
                            {bettingInfo.percent_to_each}
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
                            {bettingInfo.total_parcent}
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
                            {tournamentInfo.currency}{" "}
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
                            {tournamentInfo.currency} {bettingInfo.total_amount}
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
                            <Link to={`/be-sponsor/${bettingInfo.id}`}>
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
                                {tournamentInfo.network}{" "}
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
    </Box>
  );
};

export default ApplySponsorshipPage;
