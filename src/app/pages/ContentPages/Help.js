import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import React, { useEffect, useState } from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { Card, Dropdown, Row, Col, Badge, Image, Form } from "react-bootstrap";
import { Box, Typography, Divider, Paper } from "@material-ui/core";

import API from "../../../apiUrl.json";

function Help() {
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
            Hello. What can we help you with?
          </Typography>
        </Col>
      </Row>

      <Row >
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Account
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Payment
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Sponsorship
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
                      </Typography>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row  style={{ paddingTop: "30px" }} >
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Account
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Payment
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
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
                            to="/settings/pass"
                            className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                            Your Sponsorship
                          </Link>
                        </div>
                      </div>
                    </a>
                    <Typography
                        variant="body1"
                        style={{ marginTop: "30px", color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae.
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

export default Help;
