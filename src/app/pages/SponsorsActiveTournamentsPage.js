import { Box, Drawer, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BoxItemActiveTournamentsForSponsor from "../mycomponents/BoxItemActiveTournamentsForSponsor";
import DrawerTournamentsView from "../mycomponents/drawerTournamentsVIew";
import API from "../../apiUrl.json";

const SponsorsActiveTournamentsPage = () => {
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
        //console.log(response);
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
      <Paper>
        <Row style={{ padding: "30px" }}>
          <Col>
            <Typography variant="h6" gutterBottom>
              Active Tournaments
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ color: "#848484" }}
            >
              Active Tournaments alloted by players for sponsorships
            </Typography>
          </Col>
        </Row>
        <Row style={{ padding: "30px" }}>
          <Col>
            {activeTournaments.map((tournament) => {
              return (
                <BoxItemActiveTournamentsForSponsor
                  obj={tournament.gameData}
                  allot={tournament.data}
                  playerInfo={tournament.playerInfo}
                  setCurrentTournamentObj={setCurrentTournamentObj}
                  currentTournamentShowObj={currentTournamentShowObj}
                  setViewTournamentMode={setViewTournamentMode}
                  setCurrentAllotDetails={setCurrentAllotDetails}
                  setCurrentPlayerInfo={setCurrentPlayerInfo}
                />
              );
            })}
          </Col>
        </Row>
      </Paper>
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

export default SponsorsActiveTournamentsPage;