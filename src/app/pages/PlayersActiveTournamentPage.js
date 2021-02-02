import { Box, Typography, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import API from "../../apiUrl.json";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

const PlayersActiveTournamentPage = () => {
  const [ActiveTournaments, setActiveTournaments] = useState([]);
  const [UserDetails, setUserDetails] = useState({});

  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userInfo")));
    fetch(API.baseUrl + API.getPlayersActiveTournaments, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player_id: UserDetails.player_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          setActiveTournaments(data.active_tournaments);
        }
      })
      .catch();
  }, []);
  return (
    <Box>
      <Row>
        <Col>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Active Tournaments
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          {ActiveTournaments.length === 0 ? (
            <Paper>
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
                      You have no active tournaments.
                    </Typography>
                  </div>
                </Col>
              </Row>
            </Paper>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </Box>
  );
};

export default PlayersActiveTournamentPage;
