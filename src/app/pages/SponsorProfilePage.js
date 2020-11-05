import { Avatar, Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import API from "../../apiUrl.json";
import ReactStars from "react-rating-stars-component";
import BoxItemActiveTournamentsForSponsor from "../mycomponents/BoxItemActiveTournamentsForSponsor";

const SponsorProfilePage = () => {
  const [SponsorDetails, setSponsorDetails] = useState({});
  const [userINFO, setUserINFO] = useState({});
  const [activeTournaments, setActiveTournaments] = useState([]);

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
        setSponsorDetails(response.result);
        setActiveTournaments(response.ActiveTournaments);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
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
              <Col></Col>
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
                    title="Active Tournaments"
                    style={{ marginTop: "30px" }}
                  >
                    {activeTournaments.map((tournament) => {
                      return (
                        <BoxItemActiveTournamentsForSponsor
                          obj={tournament.gameData}
                          allot={tournament.data}
                          playerInfo={tournament.playerInfo}
                        />
                      );
                    })}
                  </Tab>
                  <Tab
                    eventKey="sponsoring"
                    title="Sponsoring Tournaments"
                  ></Tab>
                  <Tab eventKey="sponsored" title="Sponsored Tournaments"></Tab>
                </Tabs>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Box>
  );
};

export default SponsorProfilePage;
