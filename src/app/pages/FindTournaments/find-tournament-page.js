import { Box, Drawer, Paper, Typography } from "@material-ui/core";
import { Row, Col, Image } from "react-bootstrap";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import { Form, Badge } from "react-bootstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Button } from "react-bootstrap";
import API from "../../../apiUrl.json";

import Countdown from "react-countdown";
import DrawerTournamentsView from "../../mycomponents/drawerTournamentsVIew";

const Completionist = () => <span>Ended</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}
        {" day(s) "}
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const FindTournamentsPage = () => {
  //options

  const sortingValues = [
    {
      label: "Sort By Prize Pool (Low to High)",
      value: "prize_pool_low_to_high",
    },
    {
      label: "Sort By PrizePool (High to Low)",
      value: "prize_pool_high_to_low",
    },
    { label: "Sort By Enrolment (Low to High)", value: "entrants_low_to_high" },
    { label: "Sort By Enrolment (High to Low)", value: "entrants_high_to_row" },
    { label: "Sort By Name (A to Z)", value: "name_a_to_z" },
    { label: "Sort By Name (Z to A)", value: "name_z_to_a" },
    { label: "Sort By Game ID (Low to High)", value: "game_id_low_to_high" },
    { label: "Sort By Game ID (High to Low)", value: "game_id_high_to_low" },
    { label: "Sort By Scheduled Date (Recent)", value: "recent_date" },
    { label: "Sort By Scheduled Date  (Late)", value: "late_date" },
  ];
  const GameType = [
    { label: "Hold'em", value: "H", operator: "$eq", key: "game" },
    { label: "Omaha", value: "O", operator: "$eq", key: "game" },
    {},
  ];

  const Speed = [
    { label: "Hold'em", value: "H", operator: "$eq", key: "flag" },
    { label: "Omaha", value: "O", operator: "$eq", key: "flag" },
  ];

  const States = [
    {
      label: "Registering",
      value: "Registering",
      operator: "$eq",
      key: "state",
    },
    {
      label: "Late Registering",
      value: "Late Registering",
      operator: "$eq",
      key: "state",
    },
    { label: "Running", value: "Running", operator: "$eq", key: "state" },
    { label: "Completed", value: "Completed", operator: "$eq", key: "state" },
  ];

  const Networks = [
    {
      label: "PartyPoker",
      value: "PartyPoker",
      operator: "$eq",
      key: "network",
    },
    {
      label: "PokerStars",
      value: "PokerStars",
      operator: "$eq",
      key: "network",
    },
    { label: "SkyPoker", value: "SkyPoker", operator: "$eq", key: "network" },
    { label: "888Poker", value: "888Poker", operator: "$eq", key: "network" },
    { label: "Fulltilt", value: "Fulltilt", operator: "$eq", key: "network" },
  ];

  const [Enrolments, setEnrolments] = useState({ min: 1000, max: 5500 });
  const [PrizePool, setPrizePool] = useState({ min: 1000, max: 5500 });
  const [FilterStates, setFilterStates] = useState([]);
  const [FilterNetworks, setFilterNetworks] = useState([]);
  const [FilterGameType, setFiltereGameType] = useState([]);
  const [FilterSpeed, setFilterSpeed] = useState([]);
  const [Tournaments, setTournaments] = useState([]);

  const [ValuesOfNetworks, setValuesOfNetworks] = useState([]);

  const [ValuesOfGameType, setValuesOfGameType] = useState([]);

  const [ValuesOfSpeed, setValuesOfSpeed] = useState([]);

  const [ValuesOfState, setValuesOfState] = useState([]);

  const [Filters, setFilters] = useState([]);
  const [viewTournamentMode, setViewTournamentMode] = useState(false);
  const [currentViewTournament, setCurrentViewTournaments] = useState(null);
  const [organicNetworks, setOrganicNetworks] = useState([]);

  useEffect(() => {
    console.log(Filters);
    setTournaments([]);
    fetch(API.baseUrl + API.getTournamentFromSpacificNetwork, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filters: Filters }),
    })
      .then((json) => json.json())
      .then((response) => {
        console.log(response);

        setTournaments(response.result);
        setOrganicNetworks(response.networks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [Filters]);

  useEffect(() => {
    var allFilters = [];
    ValuesOfNetworks.map(async (value) => {
      await allFilters.push(value);
    });

    ValuesOfGameType.map(async (value) => {
      allFilters.push(value);
    });

    ValuesOfSpeed.map(async (value) => {
      allFilters.push(value);
    });

    ValuesOfState.map((value) => {
      allFilters.push(value);
    });
    setFilters(allFilters);
    console.log(allFilters);
  }, [ValuesOfNetworks, ValuesOfGameType, ValuesOfSpeed, ValuesOfState]);

  const handleFilterChanges = (value, key) => {
    var allFilters = [];
    if (value === null) {
      value = [];
    }
    switch (key) {
      case "network":
        setValuesOfNetworks(value);

        break;

      case "game":
        setValuesOfGameType(value);

        break;

      case "flag":
        setValuesOfSpeed(value);

        break;

      case "state":
        setValuesOfState(value);

        break;
    }

    // console.log(key);

    // console.log(value);
    // if (value !== null) {
    //   var f = [];
    //   f = Filters;
    //   await Promise.all(
    //     value.map(async (v, i) => {
    //       var found = await f.some(
    //         (el) => el.label === v.label && el.key === key
    //       );
    //       if (found) {
    //       } else {
    //         f.push(v);
    //       }
    //     })
    //   );

    //   setFilters(f);
    //   console.log(f);
    // } else {
    //   var f = [];
    //   f = Filters;
    //   var index = f.findIndex((x) => x.key === key);
    //   f.splice(index);

    //   // await Promise.all(
    //   //   value.map(async (v, i) => {

    //   //     var found = await f.some((el) => el.label === v.label);
    //   //     if (found) {
    //   //     } else {
    //   //       f.push(v);
    //   //     }
    //   //   })

    //   // );
    //   console.log(f);
    //   setFilters(f);
    // }
  };

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Typography
            variant="h4"
            style={{ color: "white", fontWeight: "600" }}
          >
            Find - Tournaments
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={4}>
          <Paper style={{ padding: "20px" }}>
            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <div className="d-flex align-items-center">
                  <span className="svg-icon svg-icon-primary">
                    <SVG
                      className="h-50 align-self-center"
                      src={toAbsoluteUrl("/media/svg/icons/Text/Filter.svg")}
                    ></SVG>
                  </span>
                  <Typography variant="h6">Filters</Typography>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">Networks</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={Networks}
                    onChange={(value) => handleFilterChanges(value, "network")}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">Game Type</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={GameType}
                    onChange={(value) => handleFilterChanges(value, "game")}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">Speed</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={Speed}
                    onChange={(value) => handleFilterChanges(value, "flag")}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">Prize Pool</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <InputRange
                    maxValue={10000}
                    minValue={10}
                    value={PrizePool}
                    onChange={(value) => setPrizePool(value)}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">Enrolment</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <InputRange
                    maxValue={10000}
                    minValue={10}
                    value={Enrolments}
                    onChange={(value) => setEnrolments(value)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Typography variant="button">State</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={States}
                    onChange={(value) => handleFilterChanges(value, "state")}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} style={{ padding: "10px" }}>
                <Button
                  variant="primary"
                  style={{
                    width: "100%",
                    height: "40px",
                    fontWeight: "600",
                  }}
                >
                  <span className="svg-icon svg-icon-white">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
                    ></Image>
                  </span>
                  Search
                </Button>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="d-flex align-items-center justify-content-center">
                  <Typography variant="button" style={{ color: "#c4c4c4" }}>
                    or
                  </Typography>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Typography variant="button">Tournament ID</Typography>
                <br />
                <div
                  className=" align-items-center"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <Form>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Tournament ID (Sharkscope Platform)"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      style={{
                        width: "100%",
                        height: "40px",
                        fontWeight: "600",
                      }}
                    >
                      <span className="svg-icon svg-icon-white">
                        <Image
                          style={{ width: "20px", height: "20px" }}
                          src={toAbsoluteUrl(
                            "/media/svg/icons/General/Search.svg"
                          )}
                        ></Image>
                      </span>
                      Search
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={8}>
          {" "}
          <Row style={{ marginBottom: "20px" }}>
            <Col lg={12}>
              <Paper
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <div
                  className="d-flex align-items-center row"
                  style={{ width: "100%" }}
                >
                  <div className="col-lg-6">
                    <Typography
                      variant="h6"
                      style={{ float: "left" }}
                      gutterBottom
                    >
                      {Tournaments.length} tournaments found
                    </Typography>
                  </div>
                  <div className="col-lg-6  justify-content-right">
                    <Form.Control
                      as="select"
                      placeholder="Sort"
                      style={{ width: "60%", float: "right" }}
                    >
                      <option> Sort By</option>
                      {sortingValues.map((option) => {
                        return (
                          <option value={option.value}>{option.label}</option>
                        );
                      })}
                    </Form.Control>
                  </div>
                </div>
              </Paper>
            </Col>
          </Row>
          {Tournaments.length !== 0 &&
            Tournaments.map((game) => {
              return (
                <Row style={{ marginBottom: "30px" }}>
                  <Col lg={12}>
                    <a>
                      <div
                        className=" card bg-light-primay rounded "
                        style={{ padding: "20px" }}
                        onClick={() => {
                          setViewTournamentMode(true);
                          setCurrentViewTournaments(game);
                        }}
                      >
                        <Row>
                          <Col lg={6}>
                            <Badge variant="success">
                              #{game.sharkscope_id}{" "}
                            </Badge>
                          </Col>
                          <Col lg={6}>
                            <Form
                              inline
                              style={{ textAlign: "right", float: "right" }}
                            >
                              <Badge variant="primary">
                                <i
                                  class="far fa-calendar"
                                  style={{
                                    color: "#fff",
                                    fontSize: "12px",
                                    marginRight: "5px",
                                  }}
                                ></i>

                                {getDates(game.scheduledStartTime)}
                              </Badge>
                              <Badge
                                variant="danger"
                                style={{
                                  marginLeft: "10px",
                                  color: "#FFF",
                                  fontWeight: "600",
                                }}
                              >
                                <i
                                  class="far fa-clock"
                                  style={{
                                    color: "#fff",
                                    fontSize: "12px",
                                    marginRight: "5px",
                                  }}
                                ></i>
                                <Countdown
                                  date={new Date(game.scheduledStartTime)}
                                  renderer={renderer}
                                />
                              </Badge>
                            </Form>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "10px" }}>
                          <Col>
                            <span className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                              {game.name}
                            </span>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.network}
                            </span>
                          </Col>
                        </Row>

                        <Row style={{ marginTop: "20px" }}>
                          <Col lg={3}>
                            <label>
                              CURRENCY{" "}
                              <i
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-info-circle"
                              ></i>
                            </label>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.currency}
                            </span>
                          </Col>
                          <Col lg={3}>
                            <label>
                              GUARENTEE{" "}
                              <i
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-info-circle"
                              ></i>
                            </label>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.guarantee}
                            </span>
                          </Col>
                          <Col lg={2}>
                            <label>
                              OVERLAY{" "}
                              <i
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-info-circle"
                              ></i>
                            </label>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.overlay}
                            </span>
                          </Col>
                          <Col lg={2}>
                            <label>
                              GAME{" "}
                              <i
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-info-circle"
                              ></i>
                            </label>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.game}
                            </span>
                          </Col>
                          <Col lg={2}>
                            <label>
                              STATE{" "}
                              <i
                                style={{
                                  color: "#000",
                                  fontSize: "12px",
                                  marginLeft: "5px",
                                }}
                                class="fas fa-info-circle"
                              ></i>
                            </label>
                            <br />
                            <span className="text-muted font-weight-bold">
                              {game.state}
                            </span>
                          </Col>
                        </Row>
                      </div>
                    </a>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
      <Drawer
        anchor="right"
        open={viewTournamentMode}
        onClose={() => setViewTournamentMode(false)}
      >
        <DrawerTournamentsView
          setViewTournamentMode={setViewTournamentMode}
          obj={currentViewTournament}
          networks={organicNetworks}
        />
      </Drawer>
    </Box>
  );
};

export default FindTournamentsPage;
