import { Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Col, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import BoxItemSponsoredTournments from "./BoxItemSponsoredTournaments";
import BoxItemActiveTournaments from "./ItemBoxActiveTournaments";
import BoxItem from "./tournamentBoxItem";

const MyActiveTournaments = ({
  activeTournaments,
  setViewAddSponsorsMode,
  setCurrentAllot,
  setViewTournamentDetails,
  setCurrentTournamentShowObj,
  setViewTournamentMode,
  sponsoredTournaments,
  setOpenDrawerB,
  openDrawer,
  setSelectedTournamentInfoObj,
  setSelectedTournamentBattingInfo,
  setSelectedPendingSponsorList,
  setSelectedApprovedSponsorList,
}) => {
  const [selectedTab, setSelectedTab] = useState("Active_Tournaments");

  const setTab = (name) => {
    //console.log(name);
    setSelectedTab(name);
  };
  return (
    <Paper style={{ padding: "30px" }}>
      <Row>
        <Col>
          <Typography variant="h6" gutterBottom>
            Player's Activities
          </Typography>

          <Typography variant="body1" gutterBottom style={{ color: "#848484" }}>
            Player's sponsored and active tournaments
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginTop: "10px" }}>
        <Col lg={12}>
          <Tabs defaultActiveKey="active_tournaments">
            <Tab eventKey="active_tournaments" title="Active Tournaments">
              <Row>
                <Col lg={12}>
                  {activeTournaments.length === 0 ||
                  activeTournaments === null ? (
                    <Row>
                      <Col
                        lg={12}
                        style={{ textAlign: "center", paddingTop: "50px" }}
                      >
                        <span className="text-muted font-weight-bolder font-size-h5">
                          No active tournaments going on.
                        </span>
                      </Col>
                    </Row>
                  ) : (
                    <div>
                      <Row style={{ marginTop: "20px", marginBottom: "10px" }}>
                        <Col lg={6}>
                          {/* <Typography
                            variant="button"
                            gutterBottom
                            style={{ float: "left", color: "#848484" }}
                          >
                            Showing Active tournaments
                          </Typography> */}
                        </Col>
                        <Col lg={6}>
                          <Link to="#">
                            <Typography
                              variant="button"
                              gutterBottom
                              style={{ float: "right" }}
                            >
                              View All
                            </Typography>
                          </Link>
                        </Col>
                      </Row>
                      {activeTournaments.map((game) => {
                        return (
                          <Row>
                            <Col lg={12}>
                              <BoxItemActiveTournaments
                                obj={game}
                                allot={game}
                                setCurrentAllot={setCurrentAllot}
                                setViewAddSponsorsMode={setViewAddSponsorsMode}
                                setViewTournamentDetails={
                                  setViewTournamentDetails
                                }
                                setCurrentTournamentShowObj={
                                  setCurrentTournamentShowObj
                                }
                                setViewTournamentMode={setViewTournamentMode}
                              />
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="sponsoring_tournaments"
              title="Sponsoring Tournaments"
            >
              <Row>
                <Col lg={12}>
                  {sponsoredTournaments.length === 0 ||
                  sponsoredTournaments === null ? (
                    <Row>
                      <Col
                        lg={12}
                        style={{ textAlign: "center", paddingTop: "50px" }}
                      >
                        <span className="text-muted font-weight-bolder font-size-h5">
                          No Sponsored tournaments going on.
                        </span>
                      </Col>
                    </Row>
                  ) : (
                    <div>
                      <Row style={{ marginTop: "20px", marginBottom: "10px" }}>
                        <Col lg={6}>
                          {/* <Typography
                            variant="button"
                            gutterBottom
                            style={{ float: "left", color: "#848484" }}
                          >
                            Showing Active tournaments
                          </Typography> */}
                        </Col>
                        <Col lg={6}>
                          <Link to="#">
                            <Typography
                              variant="button"
                              gutterBottom
                              style={{ float: "right" }}
                            >
                              View All
                            </Typography>
                          </Link>
                        </Col>
                      </Row>
                      {sponsoredTournaments.map((game) => {
                        return (
                          <Row>
                            <Col lg={12}>
                              <BoxItemSponsoredTournments
                                obj={game.gameData}
                                allot={game.data}
                                sponsorList={game.sponsoring}
                                requests={game.pending}
                                setOpenDrawerB={setOpenDrawerB}
                                openDrawer={openDrawer}
                                setSelectedTournamentInfoObj={
                                  setSelectedTournamentInfoObj
                                }
                                setSelectedTournamentBattingInfo={
                                  setSelectedTournamentBattingInfo
                                }
                                setSelectedPendingSponsorList={
                                  setSelectedPendingSponsorList
                                }
                                setSelectedApprovedSponsorList={
                                  setSelectedApprovedSponsorList
                                }
                              />
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="swapping_tournaments" title="Swapping Tournaments">
              <Row>
                <Col
                  lg={12}
                  style={{ textAlign: "center", paddingTop: "50px" }}
                >
                  <span className="text-muted font-weight-bolder font-size-h5">
                    No active tournaments going on.
                  </span>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Paper>
  );
};

export default MyActiveTournaments;
