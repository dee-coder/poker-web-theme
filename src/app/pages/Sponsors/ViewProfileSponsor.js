import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { Row, Col, Card, Badge, Form, Button } from "react-bootstrap";
import API from "../../../apiUrl.json";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import ReactStars from "react-rating-stars-component";
import "./some.css";
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

const ViewProfileSponsor = (props) => {
  const [SponsorName, setSponsorname] = useState("Deepak");
  const [ProfileData, setProfileData] = useState([]);
  const [Redirect404, setRedirect404] = useState(false);
  const [SelectedTab, setSelectedTab] = useState("Top_Sponsorships");

  useEffect(() => {
    if (props.match.params.id === undefined) {
      setRedirect404(true);
    } else {
      fetch(API.baseUrl + API.getSponsorProfile, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props.match.params.id }),
      })
        .then((json) => json.json())
        .then((response) => {
          console.log(response);
          setSponsorname(response.data.personalInfo.sponsor_name);
          setProfileData(response.data.sponsorships);
        })
        .catch((err) => {
          console.log(err.message);
        });
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
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <div className="d-flex inline align-items-center">
                    <Image
                      roundedCircle
                      src={toAbsoluteUrl("/media/users/100_2.jpg")}
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div style={{ marginLeft: "20px" }}>
                      <Typography variant="h5" gutterBottom>
                        {SponsorName}{" "}
                        <Image
                          src={toAbsoluteUrl("/media/logos/verified.png")}
                          style={{ width: "15px", height: "15px" }}
                        />
                      </Typography>

                      <ReactStars
                        style={{ float: "left" }}
                        count={5}
                        value={3.2}
                        size={12}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={8}>
                  <div
                    className="row align-items-center"
                    style={{ marginTop: "5px" }}
                  >
                    <div className="col">
                      <Typography variant="button">Total Games</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        56
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button">Total Profit</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: "800",
                          marginTop: "10px",
                          color: "#28A745",
                        }}
                      >
                        + $342.02
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button">Total Loss</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: "800",
                          marginTop: "10px",
                          color: "#DC3545",
                        }}
                      >
                        - $22.56
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="row align-items-center"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="col">
                      <Typography variant="button">Winning Ratio</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        78%
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button"> Connections</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        20 +
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button"> Active Time</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        98%
                      </Typography>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={12}>
                  <Row>
                    <div className="col-auto">
                      <span
                        className={
                          SelectedTab === "Top_Sponsorships"
                            ? "tabs-active"
                            : "tabs-not-active"
                        }
                        onClick={() => setSelectedTab("Top_Sponsorships")}
                      >
                        Top Sponsorship
                      </span>
                    </div>
                    <div className="col-auto" style={{ marginLeft: "10px" }}>
                      <span
                        className={
                          SelectedTab === "Current_Sponsorships"
                            ? "tabs-active"
                            : "tabs-not-active"
                        }
                        onClick={() => setSelectedTab("Current_Sponsorships")}
                      >
                        Current Sponsorships
                      </span>
                    </div>
                  </Row>
                  <Row style={{ marginTop: "8px" }}>
                    <Col
                      lg={12}
                      style={{ borderBottom: "1px solid #e0e0e0" }}
                    ></Col>
                  </Row>

                  {SelectedTab === "Current_Sponsorships" && (
                    <Row>
                      <Col lg={12} style={{ padding: "30px" }}>
                        {ProfileData.map((sponsorship) => {
                          return (
                            <Row>
                              <Col lg={12}>
                                <div
                                  className=" card bg-light-primay rounded "
                                  style={{ padding: "20px" }}
                                >
                                  <Row>
                                    <Col lg={6}>
                                      <Badge variant="success">
                                        #
                                        {
                                          sponsorship.tournamentInfo
                                            .sharkscope_id
                                        }{" "}
                                      </Badge>
                                    </Col>
                                    <Col lg={6}>
                                      <Form
                                        inline
                                        style={{
                                          textAlign: "right",
                                          float: "right",
                                        }}
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

                                          {getDates(
                                            sponsorship.tournamentInfo
                                              .scheduledStartUnixTime*1000
                                          )}
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
                                              new Date(
                                                sponsorship.tournamentInfo.scheduledStartUnixTime*1000
                                              )
                                            }
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
                                        //   setCurrentTournamentShowObj(obj);
                                        //   setViewTournamentDetails(true);
                                        // }}
                                      >
                                        {sponsorship.tournamentInfo.name}
                                      </a>
                                      <br />
                                      <span className="text-muted font-weight-bold">
                                        {sponsorship.tournamentInfo.network}
                                      </span>
                                    </Col>
                                  </Row>
                                  <Row style={{ padding: "20px" }}>
                                    <div clasName="col-auto">
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
                                    </div>
                                    <div
                                      className="col-auto"
                                      style={{ marginLeft: "20px" }}
                                    >
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
                                          {
                                            sponsorship.bettingInfo
                                              .number_of_sponsor
                                          }
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
                                        {sponsorship.tournamentInfo.currency}
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
                                        {sponsorship.tournamentInfo.guarantee}
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
                                        {sponsorship.tournamentInfo.overlay}
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
                                        {sponsorship.tournamentInfo.game}
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
                                        {sponsorship.tournamentInfo.state}
                                      </span>
                                    </Col>
                                  </Row>

                                  {sponsorship.bettingInfo !== null && (
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
                                            {
                                              sponsorship.bettingInfo
                                                .number_of_sponsor
                                            }
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
                                          <span className="text-muted font-weight-bold">
                                            0
                                          </span>
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
                                            {
                                              sponsorship.bettingInfo
                                                .percent_to_each
                                            }{" "}
                                            %
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
                                            {
                                              sponsorship.bettingInfo
                                                .total_parcent
                                            }{" "}
                                            %
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
                                            {parseFloat(
                                              sponsorship.bettingInfo
                                                .amount_of_each
                                            )}
                                          </span>
                                        </Col>
                                      </Row>
                                      <Row style={{ marginTop: "25px" }}>
                                        <Col lg={12}>
                                          <Form
                                            inline
                                            style={{ float: "left" }}
                                          >
                                            <a href="#">
                                              <Button variant="primary">
                                                {
                                                  sponsorship.bettingInfo
                                                    .network
                                                }{" "}
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

                                            {sponsorship.sponsorship.status}
                                          </Form>
                                        </Col>
                                      </Row>
                                    </div>
                                  )}
                                </div>
                              </Col>
                            </Row>
                          );
                        })}
                      </Col>
                    </Row>
                  )}
                  {SelectedTab === "Top_Sponsorships" && (
                    <Row>
                      <Col
                        lg={12}
                        style={{ paddingTop: "100px", paddingBottom: "100px" }}
                      >
                        <div className="d-flex align-items-center justify-content-center">
                          <Image
                            src={toAbsoluteUrl("/media/svg/empty.svg")}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "20px",
                            }}
                          />
                          <Typography variant="h6" style={{ color: "#c4c4c4" }}>
                            Sponsor has no top sponsorships yet.
                          </Typography>
                        </div>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Box>
  );
};

export default ViewProfileSponsor;
