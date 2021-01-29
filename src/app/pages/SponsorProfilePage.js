import {
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import API from "../../apiUrl.json";
import ReactStars from "react-rating-stars-component";
import BoxItemActiveTournamentsForSponsor from "../mycomponents/BoxItemActiveTournamentsForSponsor";
import DrawerTournamentsView from "../mycomponents/drawerTournamentsVIew";
import PendingSponsorshipTournamentItemBox from "./PendingSoponsorshipTournamentItemBox";
import SponsoringTournamentItemBox from "./SponsoringTournamentsItemBox";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import SVG from "react-inlinesvg";

const SponsorProfilePage = () => {
  const [SponsorDetails, setSponsorDetails] = useState({});
  const [userINFO, setUserINFO] = useState({});
  const [activeTournaments, setActiveTournaments] = useState([]);
  const [viewTournamentMode, setViewTournamentMode] = useState(false);
  const [currentTournamentShowObj, setCurrentTournamentObj] = useState({});
  const [currentAllot, setCurrentAllotDetails] = useState({});
  const [currentPlayerInfo, setCurrentPlayerInfo] = useState({});
  const [pendingTournaments, setPendingTournaments] = useState([]);
  const [sponsoringTournaments, setSponsoringTournaments] = useState([]);

  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserINFO(userInfo);
    const role = localStorage.getItem("role");
    fetch(API.baseUrl + API.getSponsorsDetails + "?id=" + userInfo.sponsor_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Sponsor-Profile:", response);
        setSponsorDetails(response.result);
        setActiveTournaments(response.ActiveTournaments);
        setNetworks(response.networks);
        setPendingTournaments(response.pending);
        setSponsoringTournaments(response.sponsoring);
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
            My Profile
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          {" "}
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col>
                <Row>
                  <Col lg={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/media/images/avatar/1.jpg"
                      style={{
                        margin: "10px",
                        width: "70px",
                        height: "70px",
                        float: "left",
                      }}
                    />
                  </Col>
                  <Col
                    lg={8}
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <Typography variant="h6">
                      {userINFO.sponsor_name}
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
                      {userINFO.sponsor_email}
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />
            <Row
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
                paddingBottom: "10px",
                paddingLeft: "30px",
              }}
            >
              <Col>
                <Row>
                  <Col>
                    <a
                      href="/sponsor/active-tournaments"
                      target="_blank"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-primary mr-5">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-primary">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Navigation/Angle-right.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="/sponsor/active-tournaments"
                            target="_blank"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Active Tournaments
                          </a>
                        </div>
                        <i
                          class="fas fa-external-link-alt"
                          style={{ fontSize: "12px", marginLeft: "10px" }}
                        ></i>
                      </div>
                    </a>
                  </Col>
                </Row>

                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <a
                      href="/sponsor/pending-sponsorship"
                      target="_blank"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-warning mr-5 ">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-warning">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Media/Pause.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="/sponsor/pending-sponsorship"
                            target="_blank"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Pending Sponsorships
                          </a>
                        </div>
                        <i
                          class="fas fa-external-link-alt"
                          style={{ fontSize: "12px", marginLeft: "10px" }}
                        ></i>
                      </div>
                    </a>
                  </Col>
                </Row>

                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <a
                      href="/sponsor/sponsoring-tournaments"
                      target="_blank"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-success mr-5 ">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-success">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Files/File-done.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="/sponsor/sponsoring-tournaments"
                            target="_blank"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Sponsoring Tournaments
                          </a>
                        </div>
                        <i
                          class="fas fa-external-link-alt"
                          style={{ fontSize: "12px", marginLeft: "10px" }}
                        ></i>
                      </div>
                    </a>
                  </Col>
                </Row>

                <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Col>
                    <a
                      href="/sponsor/sponsored-tournaments"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-secondary mr-5 ">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-secondary">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Shopping/Ticket.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="/sponsor/sponsored-tournaments"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Sponsored Tournaments
                          </a>
                        </div>
                        <i
                          class="fas fa-external-link-alt"
                          style={{ fontSize: "12px", marginLeft: "10px" }}
                        ></i>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider />
            <Row
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <Col>
                <Row>
                  <Col>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-primary mr-5">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-primary">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Code/Option.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Sponsor Statistics
                          </a>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-warning mr-5">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-warning">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/General/Settings-2.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Setting
                          </a>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-info mr-5">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-info">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Code/Info-circle.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Help
                          </a>
                        </div>
                        <i
                          class="fas fa-external-link-alt"
                          style={{ fontSize: "12px", marginLeft: "10px" }}
                        ></i>
                      </div>
                    </a>
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-45 symbol-light-secondary mr-5">
                          <span className="symbol-label">
                            <span className="svg-icon svg-icon-secondary">
                              <SVG
                                className="h-50 align-self-center"
                                src={toAbsoluteUrl(
                                  "/media/svg/icons/Navigation/Sign-out.svg"
                                )}
                              ></SVG>
                            </span>
                          </span>
                        </div>

                        <div className="d-flex flex-column flex-grow-1">
                          <a
                            href="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                          >
                            Logout
                          </a>
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={8}>
          <Paper>
            <Row
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
                paddingBottom: "10px",
                paddingLeft: "30px",
              }}
            >
              <Col>
                <Typography variant="h6" gutterBottom>
                  Sponsoring Tournaments
                </Typography>

                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ color: "#848484" }}
                >
                  Sponsor's sponsoring and sponsored tournaments
                </Typography>
              </Col>
            </Row>

            <Row
              style={{
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingBottom: "30px",
                paddingTop: "10px",
              }}
            >
              <Col>
                <Tabs defaultActiveKey="active">
                  <Tab
                    eventKey="active"
                    title="Active "
                    style={{ marginTop: "30px" }}
                  >
                    {activeTournaments.length === 0 ? (
                      <div
                        style={{
                          height: "300px",
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ marginTop: "100px" }}>
                          <img
                            style={{ width: "40px", height: "40px" }}
                            src={toAbsoluteUrl("/media/svg/empty.svg")}
                          />
                          <span
                            style={{
                              fontSize: "15px",

                              color: "#c4c4c4",
                              marginLeft: "20px",
                            }}
                          >
                            No Active tournament found.
                          </span>
                        </div>
                      </div>
                    ) : (
                      activeTournaments.map((tournament) => {
                        return (
                          <BoxItemActiveTournamentsForSponsor
                            obj={tournament.gameData}
                            allot={tournament.data}
                            playerInfo={tournament.playerInfo[0]}
                            setCurrentTournamentObj={setCurrentTournamentObj}
                            currentTournamentShowObj={currentTournamentShowObj}
                            setViewTournamentMode={setViewTournamentMode}
                            setCurrentAllotDetails={setCurrentAllotDetails}
                            setCurrentPlayerInfo={setCurrentPlayerInfo}
                          />
                        );
                      })
                    )}
                  </Tab>
                  <Tab
                    eventKey="pending"
                    title="Pending "
                    style={{ marginTop: "30px" }}
                  >
                    {pendingTournaments.map((game) => {
                      //console.log(game);
                      return (
                        <PendingSponsorshipTournamentItemBox
                          tournamentInfo={game.tournamentInfo}
                          bettingInfo={game.bettingInfo}
                          sponsoringList={game.sponsoringList}
                          playerInfo={game.playerInfo}
                        />
                      );
                    })}
                  </Tab>
                  <Tab
                    eventKey="sponsoring"
                    title="Sponsoring "
                    style={{ marginTop: "30px" }}
                  >
                    {sponsoringTournaments.map((game) => {
                      //console.log(game);
                      return (
                        <SponsoringTournamentItemBox
                          tournamentInfo={game.tournamentInfo}
                          bettingInfo={game.bettingInfo}
                          sponsoringList={game.sponsoringList}
                          playerInfo={game.playerInfo[0]}
                          allSponsors={game.allSponsors}
                        />
                      );
                    })}
                  </Tab>

                  <Tab
                    eventKey="sponsored"
                    title="Sponsored "
                    style={{ marginTop: "30px" }}
                  ></Tab>
                </Tabs>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
      <Drawer
        anchor="right"
        open={viewTournamentMode}
        onClose={() => setViewTournamentMode(false)}
      >
        <DrawerTournamentsView
          setViewTournamentMode={setViewTournamentMode}
          obj={currentTournamentShowObj}
          networks={networks}
          currentAllot={currentAllot}
          playerInfo={currentPlayerInfo}
        />
      </Drawer>
    </Box>
  );
};

export default SponsorProfilePage;
