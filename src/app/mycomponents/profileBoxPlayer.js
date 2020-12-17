/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Card, Dropdown, Row, Col, Badge, Form } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import SVG from "react-inlinesvg";
import ReactStars from "react-rating-stars-component";

import {
  DropdownCustomToggler,
  DropdownMenu2,
} from "../../_metronic/_partials/dropdowns";
import { useHtmlClassService } from "../../_metronic/layout";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Avatar, Divider, makeStyles, Typography } from "@material-ui/core";
import { ListsWidget10 } from "../../_metronic/_partials/widgets";

export function ProfileBoxPlayer({ className, statistics }) {
  var url = "";
  const [href, setHref] = useState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    //console.log(statistics);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    switch (userInfo.player_network) {
      case "PartyPoker" || "partypoker":
        url = "/media/poker-logos/partypoker-logo.jpg";
        // setUrl(string);
        // setHref("https://pokerstars.com");

        break;

      case "PokerStars" || "pokerstars":
        url = "/media/poker-logos/pokerstars-logo.jpg";
        // setUrl(string);
        // setHref("https://pokerstars.com");
        break;

      case "SkyPoker" || "skypoker":
        url = "/media/poker-logos/skypoker-logo.jpg";
        // setUrl(string);
        // setHref("https://skypoker.com");
        break;

      case "888Poker" || "888poker":
        url = "/media/poker-logos/888poker-logo.png";
        // setUrl(string);
        // setHref("https://888poker.com");
        break;

      case "FullTilt" || "fulltilt":
        url = "/media/poker-logos/fulltilt-logo.png";
        // setUrl(string);
        // setHref("https://fullltilt.com");
        break;
    }
  }, []);
  const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 0,
      width: 100,
      height: 100,
    },
  });
  //console.log(statistics);

  const classes = useStyles();
  //   var row1 = statistics[0];
  //   var row2 = statistics[1];
  //   var two = stat[1];
  //   var three = stat[2];
  //   var four = stat[3];
  //   var five = stat[4];
  //   var six = stat[5];

  return (
    <div>
      <Row
        style={{
          paddingTop: "30px",
          paddingRight: "30px",
          paddingBottom: "10px",
          paddingLeft: "30px",
        }}
      >
        <Col lg={6}>
          <Avatar
            alt="Remy Sharp"
            src={toAbsoluteUrl("/media/poker-logos/placeholder-profile.jpg")}
            className={classes.bigAvatar}
          />
        </Col>
        <Col
          lg={6}
          style={{ textAlign: "left" }}
          className="d-flex align-items-center"
        >
          <div>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h2">
              {userInfo.player_name}
            </span>
            <br />
            <p className="text-muted font-weight-bolder text-hover-primary font-size-h5">
              {userInfo.player_network_username}
            </p>
            <ReactStars
              style={{ float: "left" }}
              count={5}
              value={3.2}
              size={12}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "30px",
          color: "gray",
        }}
      >
        <div className="col-auto">
          <Typography variant="button">Statistics</Typography>
        </div>
        <div className="col d-flex align-items-center">
          <div
            style={{
              maxHeight: "2px",
              borderTop: "0.5px solid #c4c4c4",
              width: "100%",
            }}
          />
        </div>
      </Row>

      <Row
        style={{
          paddingTop: "30px",
          paddingRight: "30px",
          paddingBottom: "10px",
          paddingLeft: "30px",
        }}
      >
        {statistics.length === 0 && (
          <Col lg={12}>
            <Typography
              variant="body"
              style={{ color: "gray", fontWeight: "600" }}
            >
              No statistics available.
            </Typography>
          </Col>
        )}
        {statistics.slice(0, 3).map((row) => {
          return (
            <Col lg={4}>
              <Typography variant="button" style={{ color: "gray" }}>
                {row["@id"]}
              </Typography>
              <br />
              <div className="symbol symbol-light-success ">
                <span
                  className="symbol-label"
                  style={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <span className="svg-icon svg-icon-success">
                    <Typography variant="button"> {row["@value"]}</Typography>
                  </span>
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row
        style={{
          paddingTop: "10px",
          paddingRight: "30px",
          paddingBottom: "10px",
          paddingLeft: "30px",
        }}
      >
        {statistics.slice(4, 7).map((row) => {
          return (
            <Col lg={4}>
              <Typography variant="button" style={{ color: "gray" }}>
                {row["@id"]}
              </Typography>
              <br />
              <div className="symbol symbol-light-success ">
                <span
                  className="symbol-label"
                  style={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    paddingBottom: "3px",
                    paddingTop: "3px",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <span className="svg-icon svg-icon-success">
                    <Typography variant="button"> {row["@value"]}</Typography>
                  </span>
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "30px",
          color: "gray",
        }}
      >
        <div className="col-auto">
          <Typography variant="button">Tournaments</Typography>
        </div>
        <div className="col d-flex align-items-center">
          <div
            style={{
              maxHeight: "2px",
              borderTop: "0.5px solid #c4c4c4",
              width: "100%",
            }}
          />
        </div>
      </Row>

      <Row
        style={{
          paddingTop: "30px",
          paddingRight: "30px",
          paddingBottom: "10px",
          paddingLeft: "30px",
        }}
      >
        <Col>
          <Row>
            <Col>
              <a
                href="/player/active-tournaments"
                target="_blank"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-primary mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-primary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Angle-right.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="/player/active-tournaments"
                      target="_blank"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Active Tournaments
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col>
              <a
                href="/player/sponsoring-tournaments"
                target="_blank"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-success mr-5 ">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-success">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Files/File-done.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="/player/sponsoring-tournaments"
                      target="_blank"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Sponsoring Tournaments
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col>
              <a
                href="/player/swapping-tournaments"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-secondary mr-5 ">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-secondary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Shopping/Ticket.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="/player/swapping-tournaments"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Swapping Tournaments
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col>
              <a
                href="/player/swapped-tournaments"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-secondary mr-5 ">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-secondary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Shopping/Ticket.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="/player/swapped-tournaments"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Swapped Tournaments
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col>
              <a
                href="/player/top-tournaments"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-primary mr-5 ">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-primary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Arrow-from-bottom.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="/player/top-tournaments"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Top Tournaments
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "30px",
          color: "gray",
        }}
      >
        <div className="col-auto">
          <Typography variant="button">Other</Typography>
        </div>
        <div className="col d-flex align-items-center">
          <div
            style={{
              maxHeight: "2px",
              borderTop: "0.5px solid #c4c4c4",
              width: "100%",
            }}
          />
        </div>
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
          <Row>
            <Col>
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-primary mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-primary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Code/Option.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Player Statistics
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-warning mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-warning">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/Settings-2.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Setting
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col>
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-warning mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-warning">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Degins/Circle.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Event
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-info mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-info">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Code/Info-circle.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Help
                    </a>
                  </div>
                  <i
                    class="fas fa-external-link-alt"
                    style={{ fontSize: "12px", marginLeft: "10px" }}
                  ></i>
                </div>
              </a>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <a
                href="#"
                className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-45 symbol-light-secondary mr-5">
                    <span className="symbol-label">
                      <span className="svg-icon svg-icon-secondary">
                        <SVG
                          className="h-50 align-self-center"
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Navigation/Sign-out.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <a
                      href="#"
                      className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*
        <Row>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {three["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {three["$"]}
            </span>
          </Col>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {four["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {four["$"]}
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {five["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {five["$"]}
            </span>
          </Col>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {six["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {six["$"]}
            </span>
          </Col>
        </Row> */}
    </div>
  );
}
