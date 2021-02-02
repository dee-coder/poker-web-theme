/* eslint-disable jsx-a11y/anchor-is-valid */
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import React, { useEffect, useState } from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { Card, Dropdown, Row, Col, Badge, Image, Form } from "react-bootstrap";
import {
  Box,
  Avatar,
  makeStyles,
  Typography,
  Divider,
  Paper,
} from "@material-ui/core";

import API from "../../../apiUrl.json";

import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import { ContentRoute } from "../../../_metronic/layout";

function SettingHome() {
  const [redirect, setRedirect] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo === undefined || userInfo === null) {
      setRedirect(true);
    } else {
      setRedirect(false);
      // console.log(userInfo);
      // setUserInfo(userInfo);
    }
  });
  
  const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 0,
      width: 70,
      height: 70,
    },
  });
  //console.log(statistics);

  const classes = useStyles();

  if (redirect) {
    return <Redirect to="/auth/login" />;
  } else {
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
              Edit Your Profile
            </Typography>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={4}>
              <Paper>
                <Row
                  style={{
                    paddingTop: "30px",
                    paddingRight: "30px",
                    paddingBottom: "10px",
                    paddingLeft: "30px",
                  }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={toAbsoluteUrl(
                      "/media/poker-logos/placeholder-profile.jpg"
                    )}
                    className={classes.bigAvatar}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <Typography variant="body1" style={{ fontSize: "20px" }}>
                      {userInfo.player_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ fontSize: "14px", color: "gray" }}>
                      {userInfo.player_network_username}({" "}
                      {userInfo.player_email} )
                    </Typography>
                  </div>
                </Row>
                
                  <Row style={{ padding: "30px" }}>
                    <Col lg={12}>
                      <Typography variant="h6" gutterBottom>
                        Edit Details{" "}
                      </Typography>
                    </Col>
                  </Row>
                  <Divider />
                  <Row
                    style={{
                      paddingTop: "30px",
                      paddingRight: "30px",
                      paddingBottom: "30px",
                      paddingLeft: "30px",
                    }}>
                    <Col>
                      <a
                        href="#"
                        className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column flex-grow-1">
                            <Link
                              to="/settings/pass"
                              className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                              Change Password
                            </Link>
                          </div>
                          <i
                            class="fas fa-external-link-alt"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                            }}></i>
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
                    }}>
                    <Col>
                      <a
                        href="#"
                        className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column flex-grow-1">
                            <Link
                              to="/settings/username"
                              className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                              Change User Name
                            </Link>
                          </div>
                          <i
                            class="fas fa-external-link-alt"
                            style={{
                              fontSize: "12px",
                              marginLeft: "10px",
                            }}></i>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </Paper>
              </Col>
              <Col lg={8}>
                {/* <Paper>
                <Row style={{ padding: "30px" }}>
                  <Col lg={12}>
                    <Typography variant="h6" gutterBottom>
                      Write Review{" "}
                    </Typography>
                  </Col>
                </Row>
                <Divider />
              </Paper> */}
                <Paper>
                  <div
                    className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0"
                    style={{ paddingTop: "50px" }}>
                    <Switch>
                      <ContentRoute
                        path="/settings/pass"
                        component={ChangePassword}
                      />
                      <ContentRoute
                        path="/settings/username"
                        component={ChangeUserName}
                      />
                      <Redirect
                        from="/settings"
                        exact={true}
                        to="/settings/pass"
                      />
                      <Redirect to="/settings/pass" />
                    </Switch>
                  </div>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Box>
    );
  }
}

export default SettingHome;
