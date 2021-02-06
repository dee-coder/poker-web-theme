import { Box, Drawer, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, Switch, Redirect } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import ActiveSponsorshipPlayer from "../mycomponents/ActiveSponsorhipPlayer";
import DrawerTournamentSponsorshipView from "../mycomponents/DrawerTournamentSponsorhipView";
import SponsoredSponsorshipPlayer from "../mycomponents/SponsoredSponsorshipPlayer";

const MyActiveSponsorshipPage = () => {
  const [DrawerB, setDrawerB] = useState(false);
  const [selectedTournamentInfoObj, setSelectedTournamentInfoObj] = useState(
    {}
  );
  const [
    selectedTournamentBattingInfo,
    setSelectedTournamentBattingInfo,
  ] = useState({});
  const [selectedPendingSponsorList, setSelectedPendingSponsorList] = useState(
    []
  );
  const [
    selectedApprovedSponsorList,
    setSelectedApprovedSponsorList,
  ] = useState([]);

  const [organicNetworks, setOrganicNetworks] = useState([]);

  return (
    <Box>
      <Row>
        <Col>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            My Sponsorships
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={4}>
          <Paper style={{ padding: "20px" }}>
            <Row
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <Col>
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column flex-grow-1">
                      <Link
                        to="/player/sponsorships/active"
                        className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Active Sponsorship
                        <i
                          class="fas fa-chevron-right"
                          style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            float: "right",
                          }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
            <Row
              style={{
                paddingTop: "30px",
                paddingRight: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <Col>
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-column flex-grow-1">
                      <Link
                        to="/player/sponsorships/sponsored"
                        className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        Sponsored Tournements
                        <i
                          class="fas fa-chevron-right"
                          style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            float: "right",
                          }}
                        ></i>
                      </Link>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={8}>
          <Switch>
            <ContentRoute path="/player/sponsorships/active">
              <ActiveSponsorshipPlayer
                setOpenDrawerB={setDrawerB}
                openDrawer={DrawerB}
                setOrganicNetworks={setOrganicNetworks}
                setSelectedTournamentInfoObj={setSelectedTournamentInfoObj}
                setSelectedTournamentBattingInfo={
                  setSelectedTournamentBattingInfo
                }
                setSelectedPendingSponsorList={setSelectedPendingSponsorList}
                setSelectedApprovedSponsorList={setSelectedApprovedSponsorList}
              />
            </ContentRoute>

            <ContentRoute path="/player/sponsorships/sponsored">
              <SponsoredSponsorshipPlayer />
            </ContentRoute>
            <Redirect
              from="/player/sponsorships"
              to="/player/sponsorships/active"
            />
            {/* <Redirect to="/player/sponsorships/active" /> */}
          </Switch>
        </Col>
      </Row>
      <Drawer anchor="right" open={DrawerB} onClose={() => setDrawerB(false)}>
        <DrawerTournamentSponsorshipView
          openDrawer={DrawerB}
          setOpenDrawer={setDrawerB}
          networks={organicNetworks}
          tournamentInfo={selectedTournamentInfoObj}
          tournamentBattingInfo={selectedTournamentBattingInfo}
          pendingSponsorList={selectedPendingSponsorList}
          setPendingSponsorList={setSelectedPendingSponsorList}
          approvedSponsorList={selectedApprovedSponsorList}
        />
      </Drawer>
    </Box>
  );
};

export default MyActiveSponsorshipPage;
