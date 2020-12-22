import { Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import API from "../../apiUrl.json";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

const MyNotifications = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [Notifications, setNotifications] = useState([]);

  useEffect(() => {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    var Role = localStorage.getItem("role");
    //console.log(userInfo, Role);
    var idRole = Role === "player" ? userInfo.player_id : userInfo.sponsor_id;
    fetch(API.baseUrl + API.AllNotifications + "/" + idRole, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((json) => json.json())
      .then((data) => {
        console.log(data, "notifcations");
        setNotifications(data.notifications);
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  }, []);

  const handleDeleteNotifications = (not) => {
    console.log(not);
    var index = Notifications.findIndex((e) => e.id === not.id);
    var arr = [];
    arr = Notifications.splice(index);
    setNotifications(arr);
  };
  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.getHours() + " : " + today.getMinutes();
    return (today = mm + "-" + dd + "-" + yyyy + ", " + time);
  }
  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-start">
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "white" }}
            >
              My Notifications
            </Typography>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card">
            <div className="card-header">
              <Typography
                variant="h4"
                style={{ fontSize: "20px", fontWeight: "600", color: "black" }}
              >
                Today
              </Typography>
            </div>
            <div className="card-body">
              <Typography variant="body1">No new notifications.</Typography>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card">
            <div className="card-header">
              <Typography
                variant="h4"
                style={{ fontSize: "20px", fontWeight: "600", color: "black" }}
              >
                Earlier
              </Typography>
            </div>
            <div className="card-body">
              {Notifications.map((not) => {
                return (
                  <div className="d-flex align-items-center bg-light-primary rounded p-5 mb-5">
                    <span className="svg-icon svg-icon-primary mr-5">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media//svg/icons/Home/Library.svg"
                        )}
                        className="svg-icon svg-icon-lg"
                      ></SVG>
                    </span>

                    <div className="d-flex flex-column flex-grow-1 mr-2">
                      <span className="text-muted font-size-sm">
                        {not.type}
                      </span>
                      <a
                        href={not.links}
                        target="_blank"
                        className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                      >
                        {not.content}
                      </a>
                    </div>
                    <div>
                      <span
                        className="text-muted font-size-sm"
                        style={{ float: "right", fontSize: "10px" }}
                      >
                        {getDates(not.created)}
                      </span>
                      <br />

                      <a
                        onClick={() => handleDeleteNotifications(not)}
                        style={{ float: "right" }}
                      >
                        <span className="svg-icon svg-icon-primary mr-5">
                          <SVG
                            style={{ float: "right" }}
                            src={toAbsoluteUrl(
                              "/media//svg/icons/Navigation/Close.svg"
                            )}
                            className="svg-icon svg-icon-lg"
                          ></SVG>
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default MyNotifications;
