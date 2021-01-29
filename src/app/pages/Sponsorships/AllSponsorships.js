import { Box, Drawer, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import BoxItemActiveTournamentsForSponsor from "../../mycomponents/BoxItemActiveTournamentsForSponsor";
import DrawerTournamentsView from "../../mycomponents/drawerTournamentsVIew";
import API from "../../../apiUrl.json";
import { Row, Col } from "react-bootstrap";

const AllSponsorships = () => {
  let Role;
  let url = API.baseUrl + API.getAllSponsorships;
  let userInfo;

  //common
  const [RedirectsForLogin, setRedirectsForLogin] = useState(false);
  const [Sponsorships, setSponsorships] = useState([]);
  const [viewTournamentMode, setViewTournamentMode] = useState();
  const [currentAllot, setCurrentAllot] = useState();
  const [networks, setNetworks] = useState();
  const [currentPlayerInfo, setCurrentPlayerInfo] = useState();

  //sponsor
  const [CurrentTournamentObj, setCurrentTournamentObj] = useState();
  const [currentTournamentShowObj, setCurrentTournamentShowObj] = useState();
  const [CurrentAllotDetails, setCurrentAllotDetails] = useState();

  useEffect(() => {
    if (localStorage.getItem("userInfo") !== undefined) {
      userInfo = JSON.parse(localStorage.getItem("userInfo"));
      Role = localStorage.getItem("role");

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: Role, id: userInfo.sponsor_id }),
      })
        .then((response) => response.json())
        .then((response) => {
          //console.log(response);
          setSponsorships(response.sponsorships);
        })
        .catch((err) => console.log(err));
    } else {
      //redirects to login
      setRedirectsForLogin(true);
    }
  }, []);

  if (Role === "player") {
    return <Box></Box>;
  } else {
    return (
      <Box>
        {RedirectsForLogin && <Redirect to="auth" />}
        <Row>
          <Col lg={12}>
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "white" }}
            >
              Sponsorships
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title>13 Results</Card.Title>
              </Card.Header>
              <Card.Body>
              
                {Sponsorships.map((tournament) => {
                  return (
                    <a
                      style={{ color: "inherit", textDecoration: "none" }}
                      target="_blank"
                      href={`/sponsorship/${tournament.sponsorship.sponsorship_id}`}
                    >
                      <BoxItemActiveTournamentsForSponsor
                        obj={tournament.tournamentInfo}
                        allot={tournament.bettingInfo}
                        playerInfo={tournament.playerInfo}
                        setCurrentTournamentObj={setCurrentTournamentObj}
                        currentTournamentShowObj={currentTournamentShowObj}
                        setViewTournamentMode={setViewTournamentMode}
                        setCurrentAllotDetails={setCurrentAllotDetails}
                        setCurrentPlayerInfo={setCurrentPlayerInfo}
                      />
                    </a>
                  );
                })}              
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Drawer
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
        </Drawer> */}
      </Box>
    );
  }
};

export default AllSponsorships;
