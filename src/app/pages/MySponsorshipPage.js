import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyActiveSponsorshipPage = () => {
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
          <Paper style={{ padding: "20px" }}></Paper>
        </Col>
      </Row>
    </Box>
  );
};

export default MyActiveSponsorshipPage;
