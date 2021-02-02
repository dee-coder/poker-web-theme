import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import React, { useEffect, useState } from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { Card, Dropdown, Row, Col, Badge, Image, Form } from "react-bootstrap";
import { Box, Typography, Divider, Paper } from "@material-ui/core";

import API from "../../../apiUrl.json";

function Event() {
  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Typography
            variant="h1"
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "40px",
              marginTop: "20px",
              marginBottom: "40px",
            }}>
            PokerSwapping Events and Webinars PokerSwapping events, both online
            and in-person, bringing the community together to connect,
            collaborate, and learn from our experts.
          </Typography>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={4}>
              <Paper>
                <Row style={{ padding: "30px" }}>
                  <Col lg={12}>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column flex-grow-1">
                          <Link
                            to="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            PokerSwapping event3
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                      variant="body1"
                      style={{ marginTop: "30px", color: "black" }}>
                      PokerSwapping Events and Webinars PokerSwapping events,
                      both online and in-person, bringing the community together
                      to connect, collaborate, and learn from our experts.
                    </Typography>
                  </Col>
                </Row>
              </Paper>
            </Col>

            <Col lg={4}>
              <Paper>
                <Row style={{ padding: "30px" }}>
                  <Col lg={12}>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column flex-grow-1">
                          <Link
                            to="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            PokerSwapping event2
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                      variant="body1"
                      style={{ marginTop: "30px", color: "black" }}>
                      PokerSwapping Events and Webinars PokerSwapping events,
                      both online and in-person, bringing the community together
                      to connect, collaborate, and learn from our experts.
                    </Typography>
                  </Col>
                </Row>
              </Paper>
            </Col>

            <Col lg={4}>
              <Paper>
                <Row style={{ padding: "30px" }}>
                  <Col lg={12}>
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column flex-grow-1">
                          <Link
                            to="#"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            PokerSwapping event1
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                      variant="body1"
                      style={{ marginTop: "30px", color: "black" }}>
                      PokerSwapping Events and Webinars PokerSwapping events,
                      both online and in-person, bringing the community together
                      to connect, collaborate, and learn from our experts.
                    </Typography>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
}

export default Event;
