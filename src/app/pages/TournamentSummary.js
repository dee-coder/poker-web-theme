import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import API from "../../apiUrl.json";
import StepperForTournamentSummary from "../mycomponents/StepperForTournamentSummary";

const TournamentSummary = (props) => {
  const [SponsorshipID, setSponsorshiID] = useState(null);

  useEffect(() => {
    setSponsorshiID(props.match.params.id);
    var sponsorship_id = props.match.params.id;

    fetch(API.baseUrl + API.getSummaryofSponsorship, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sponsorship_id: sponsorship_id }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Typography
            variant="body1"
            style={{ fontWeight: "600", color: "white", fontSize: "25px" }}
          >
            Summary
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card">
            <div className="card-body" style={{ padding: "20px" }}>
              <Row>
                <Col lg={12}>
                  <div className="d-flex align-items-center">
                    <div>
                      <Typography variant="body1" style={{ fontSize: "20px" }}>
                        Daily $90K Sat: Freeroll [7 Tickets Awarded]
                      </Typography>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={12}>
                  <div
                    className="d-flex align-items-center"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <div
                      className="d-flex flex-column"
                      style={{
                        marginTop: "15px",
                        marginBottom: "15px",
                        marginRight: "15px",
                      }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Poker Networks
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Poker Stars
                      </Typography>
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ margin: "15px" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Tournament started
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        Dec 31, 2010 05:35
                      </Typography>
                    </div>

                    <div
                      className="d-flex flex-column"
                      style={{ margin: "15px" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Buy-In+Fee
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        $0.00+$0.00
                      </Typography>
                    </div>

                    <div
                      className="d-flex flex-column"
                      style={{ margin: "15px" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Game
                      </Typography>
                      <br />
                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        NL Hold'em, Multi Table
                      </Typography>
                    </div>

                    <div
                      className="d-flex flex-column"
                      style={{ margin: "15px" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Players
                      </Typography>
                      <br />

                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        31458
                      </Typography>
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ margin: "15px" }}
                    >
                      <Typography
                        variant="button"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        Prize pool
                      </Typography>
                      <br />

                      <Typography
                        variant="body1"
                        style={{ marginTop: "10px" }}
                        style={{ fontSize: "18px", fontWeight: "600" }}
                      >
                        $676.50
                      </Typography>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col lg={12}>
                  <StepperForTournamentSummary />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default TournamentSummary;
