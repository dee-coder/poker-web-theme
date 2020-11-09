import { Box, Drawer, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BoxItemActiveTournamentsForSponsor from "../mycomponents/BoxItemActiveTournamentsForSponsor";
import DrawerTournamentsView from "../mycomponents/drawerTournamentsVIew";
import API from "../../apiUrl.json";
import PendingSponsorshipTournamentItemBox from "./PendingSoponsorshipTournamentItemBox";
import SponsoringTournamentItemBox from "./SponsoringTournamentsItemBox";

const SponsorsSponsoredTournamentPage = () => {
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
              Sponsored Tournaments
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ color: "#848484" }}
            >
              Your sponsored tournaments
            </Typography>
          </Col>
        </Row>
        <Row style={{ padding: "30px" }}>
          <Col>
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
          </Col>
        </Row>
      </Paper>
    </Box>
  );
};

export default SponsorsSponsoredTournamentPage;
