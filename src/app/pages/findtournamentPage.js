import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MultipleInputField from "../mycomponents/multipleInputField";
import { Box, Divider, Drawer } from "@material-ui/core";
import Select from "react-select";
import _ from "lodash";
import {
  Card,
  Row,
  Col,
  Form,
  Spinner,
  Button,
  Pagination,
  Tabs,
  Tab,
  Dropdown,
  FormControl,
} from "react-bootstrap";

import moment from "moment";
import JsonUrl from "../../apiUrl.json";
import API from "../../apiUrl.json";

import axios from "axios";
import TournamentItem from "../mycomponents/tournamentItem";
import BoxItem from "../mycomponents/tournamentBoxItem";
import DrawerTournamentsView from "../mycomponents/drawerTournamentsVIew";
import CustomPagination from "../mycomponents/CustomPagination";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  list: {
    width: 1200,
  },
  viewBoxCont: {
    width: "auto",
  },
}));

const FindTournamentPage = () => {
  const [selectedNetwork, setSelectedNetworks] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [tournamentList, setTournamentList] = useState([]);
  const [noData, setNoData] = useState(false);
  const [organicNetworks, setOrganicNetworks] = useState([]);

  const [networkWhichSelected, setNeworksWhichSelected] = useState([]);
  const [enrolmentWhichSelected, setEnrolmentWhichSelected] = useState([]);
  const [stateWhichSelected, setStateWhichSelected] = useState([]);
  const [speedWhichSelected, setSpeedWhichSelected] = useState([]);
  const [gameTypeWhichSelected, setGameTypeWhichSelected] = useState([]);
  const [prizePoolWhichSelected, setPrizePoolWhichSelected] = useState([]);

  //pagination
  const [pagination, setPagination] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [startPaginationValues, setStartPaginationValues] = useState(0);
  const [endPaginationValue, setEndPaginationValue] = useState(50);
  const [pages, setPages] = useState([]);
  const [activePage, setActivePages] = useState(1);
  const [viewType, setViewType] = useState("box");
  const [viewTournamentMode, setViewTournamentMode] = useState(false);
  const [currentViewTournament, setCurrentViewTournaments] = useState(null);

  const [pageOfItems, setPageOfItems] = useState([]);

  const [sortingKey, setSortingKey] = useState();

  const [holdedList, setHoldedList] = useState([]);

  const [tournamentId, setTournamentId] = useState();

  var urlNetwork = JsonUrl.baseUrl + JsonUrl.getTournamentFromSpacificNetwork;

  useEffect(() => {
    setShowSpinner(true);
    setTournamentList([]);
    var list = [];
    //console.log("URL:", urlNetwork);

    //data
    //console.log(selectedNetwork);
    if (selectedNetwork === null || selectedNetwork.length === 0) {
      //setHoldedList([]);
      var data = {
        networks: "",
        filters: "",
      };
      setShowSpinner(true);
      //fetch(urlNetwork)
      fetch(urlNetwork, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("Axios Response:", data);
          setShowSpinner(false);
          if (data.status === "ok") {
            //console.log("Response:", data.result);

            setTournamentList(data.result);
            setHoldedList(data.result);
            setNoData(false);
            setShowSpinner(false);
            var lenght = data.result.length;
            //console.log(lenght);
            var sets = lenght / 30;
            //console.log(sets);
            var pagess = Math.ceil(sets);
            //console.log(pagess);
            list = Array(pagess - 1 + 1)
              .fill()
              .map((_, idx) => 1 + idx);

            //var list = Array.from(Array(pagess).keys());
          } else if (data.status === "failed") {
            setNoData(true);

            setShowSpinner(false);
          }
          setPages(list);
          setOrganicNetworks(data.networks);
          //console.log("Pages:", list);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //setHoldedList([]);
      var data = {
        networks: selectedNetwork || "",
        filters: selectedFilters,
      };
      setShowSpinner(true);
      //fetch(urlNetwork)
      fetch(urlNetwork, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("Axios Response:", data);
          setShowSpinner(false);
          if (data.status === "ok") {
            //console.log("Response:", data.result);
            setTournamentList(data.result);
            setHoldedList(data.result);
            setNoData(false);
            setShowSpinner(false);
            var lenght = data.result.length;
            //console.log(lenght);
            var sets = lenght / 30;
            //console.log(sets);
            var pagess = Math.ceil(sets);
            //console.log(pagess);
            list = Array(pagess - 1 + 1)
              .fill()
              .map((_, idx) => 1 + idx);
            //var list = Array.from(Array(pagess).keys());
          } else if (data.status === "failed") {
            setNoData(true);

            setShowSpinner(false);
          }
          setPages(list);
          setOrganicNetworks(data.networks);
          // _.find(pageOfItems, function(o) {
          //   return new Date(o.scheduledStartTime * 1000) > new Date();
          // });
          //console.log("Pages:", list);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedFilters, selectedNetwork]);

  const classes = useStyles();
  const sortingValues = [
    // { label: "Sort By Date (Latest to Oldest)", value: "date" },
    // { label: "Sort By Date (Oldest to Latest)", value: "date" },
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

  const openTournamentView = (obj) => {
    setCurrentViewTournaments(obj);
    setViewTournamentMode(true);
  };
  const handleSorting = (e) => {
    //console.log(e.target.value);
    setHoldedList(tournamentList);

    switch (e.target.value) {
      case "prize_pool_low_to_high":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          return a.guarantee - b.guarantee;
        });

        setHoldedList(arr);
        break;

      case "prize_pool_high_to_low":
        //console.log("running");
        var arr = [...holdedList];

        arr.sort((a, b) => {
          return b.guarantee - a.guarantee;
        });
        setHoldedList(arr);
        break;

      case "name_a_to_z":
        var arr = [...holdedList];

        arr.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setHoldedList(arr);
        break;

      case "name_z_to_a":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          let fa = b.name.toLowerCase(),
            fb = a.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setHoldedList(arr);

        break;

      case "entrants_low_to_high":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          return a.totalEntrants - b.totalEntrants;
        });
        setHoldedList(arr);
        break;

      case "entrants_high_to_row":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          return b.totalEntrants - a.totalEntrants;
        });
        setHoldedList(arr);
        break;

      case "game_id_low_to_high":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          return a.sharkscope_id - b.sharkscope_id;
        });
        setHoldedList(arr);
        break;

      case "game_id_high_to_low":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          return b.sharkscope_id - a.sharkscope_id;
        });
        setHoldedList(arr);
        break;

      case "recent_date":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          let da = new Date(a.scheduledStartTime),
            db = new Date(b.scheduledStartTime);
          return db - da;
        });
        setHoldedList(arr);
        break;

      case "late_date":
        var arr = [...holdedList];
        arr.sort((a, b) => {
          let da = new Date(a.scheduledStartTime),
            db = new Date(b.scheduledStartTime);
          return da - db;
        });
        setHoldedList(arr);
        break;
    }
    // var arr = _.sortBy(holdedList, (o) => {
    //   return o[e.target.value];
    // });
    // setHoldedList(arr);
  };

  const onChangePage = (pageOfItems) => {
    // update state with new page of items
    setPageOfItems(pageOfItems);
  };

  const handlePaginationValue = (page) => {
    setActivePages(page);
    //console.log(page);
    setStartPaginationValues(activePage * 10);
    //console.log(startPaginationValues);

    setEndPaginationValue(activePage * 10 + 10);
    //console.log(endPaginationValue);
  };

  const handleSingleIdTournamentQuery = async (e) => {
    setShowSpinner(true);
    e.preventDefault();
    await fetch(API.baseUrl + API.getTournamentById + "?id=" + tournamentId, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (json) => {
        //console.log(json);
        // var arr = [];
        if (json.status === "ok") {
          //console.log(json);
          await setHoldedList([]);
          await setHoldedList([...holdedList, json.result]);
          setShowSpinner(false);
          //console.log(holdedList);
          //console.log(json.result);
        } else {
          setNoData(true);
          //setHoldedList([]);
          setShowSpinner(true);
        }
      });
  };

  return (
    <Box component="span" m={5}>
      <Row style={{ marginTop: "-10px" }}>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Card.Title>Apply Filters</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Form.Label style={{ fontSize: "14px" }}>
                  Filters Games by currency, type, buy-in and more.
                </Form.Label>
              </Card.Subtitle>
              <Divider />

              <MultipleInputField
                selectedNetwork={selectedNetwork}
                setSelectedNetworks={setSelectedNetworks}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                networkWhichSelected={networkWhichSelected}
                setNeworksWhichSelected={setNeworksWhichSelected}
                enrolmentWhichSelected={enrolmentWhichSelected}
                setEnrolmentWhichSelected={setEnrolmentWhichSelected}
                stateWhichSelected={stateWhichSelected}
                setStateWhichSelected={setStateWhichSelected}
                speedWhichSelected={speedWhichSelected}
                setSpeedWhichSelected={setSpeedWhichSelected}
                gameTypeWhichSelected={gameTypeWhichSelected}
                setGameTypeWhichSelected={setGameTypeWhichSelected}
                prizePoolWhichSelected={prizePoolWhichSelected}
                setPrizePoolWhichSelected={setPrizePoolWhichSelected}
                tournamentId={tournamentId}
                setTournamentId={setTournamentId}
                handleSingleIdTournamentQuery={handleSingleIdTournamentQuery}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "25px" }}>
        <Col lg={12}>
          <Paper className={classes.paper}>
            <div className="bg-light-primy round" style={{ padding: "20px" }}>
              <Row>
                <Col lg={4}>
                  <Form>
                    <label>View Type</label>
                    <br />
                    <Button
                      onClick={() => setViewType("box")}
                      variant={viewType === "box" ? "primary" : "secondary"}
                    >
                      <i class="fas fa-stream" style={{ fontSize: "12px" }}></i>{" "}
                    </Button>

                    <Button
                      style={{ marginLeft: "10px" }}
                      onClick={() => setViewType("list")}
                      variant={viewType === "list" ? "primary" : "secondary"}
                    >
                      <i class="fas fa-list" style={{ fontSize: "12px" }}></i>
                    </Button>
                  </Form>
                </Col>

                <Col lg={4}>
                  <Form style={{ float: "right" }}>
                    <label style={{ float: "right" }}>Pages</label>
                    <br />
                    {/* <Pagination style={{ marginTop: "10px" }}>
                      <Pagination.First />
                      <Pagination.Prev />
                      {pages.length > 15 &&
                        pages.slice(0, 15).map((page, index) => {
                          return (
                            <Pagination.Item
                              active={activePage === page ? true : false}
                              onClick={() => handlePaginationValue(page)}
                            >
                              {" "}
                              {page}
                            </Pagination.Item>
                          );
                        })}
                      <Pagination.Ellipsis />;
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination> */}

                    <CustomPagination
                      items={holdedList.reverse()}
                      onChangePage={onChangePage}
                    />
                  </Form>
                </Col>
                <Col lg={4}>
                  <Form style={{ float: "right" }}>
                    <label style={{ float: "right" }}>Sorting</label>
                    <br />

                    <Form.Control
                      as="select"
                      placeholder="select"
                      onChange={(e) => handleSorting(e)}
                    >
                      <option> Select</option>
                      {sortingValues.map((option) => {
                        return (
                          <option value={option.value}>{option.label}</option>
                        );
                      })}
                    </Form.Control>
                  </Form>
                </Col>
              </Row>
            </div>
          </Paper>
        </Col>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Col lg={12}>
          {showSpinner && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {viewType === "box"
            ? holdedList.length > 0 &&
              // holdedList
              //   .slice(startPaginationValues, endPaginationValue)
              //   .map((obj) => {
              //     return (
              //       <BoxItem
              //         obj={obj}
              //         setViewTournamentMode={openTournamentView}
              //         networks={organicNetworks}
              //       />
              //     );
              //   })
              pageOfItems.map((obj) => {
                return (
                  <BoxItem
                    obj={obj}
                    setViewTournamentMode={openTournamentView}
                    networks={organicNetworks}
                  />
                );
              })
            : // pageOfItems.map((obj) => {

              // })
              pageOfItems.length > 0 && (
                <TournamentItem
                  tournamentList={pageOfItems.filter(
                    (item) =>
                      new Date(item.scheduledStartUnixTime * 1000) > new Date()
                  )}
                />
              )}

          {/* {tournamentList.length > 0 &&
                tournamentList.map((obj) => {
                  return <BoxItem obj={obj} />;
                })}
        
           
              {tournamentList.length > 0 && (
                <TournamentItem tournamentList={tournamentList} />
              )} */}
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

const styles = {
  paginationItem: {
    background: "#fff",
    color: "#000",

    width: "auto",
    outlineShadow: "none",
  },
  activeItemPage: {
    color: "#FFF",
    borderRadius: "0px",

    width: "auto",
  },
  viewBtn: {
    fontSize: "10px",
    padding: "5px",
    border: "1px solid #0275d8",
    background: "#fff",
    color: "#0275d8",
  },
  activeView: {
    fontSize: "10px",
    padding: "5px",
    border: "1px solid #0275d8",

    color: "#fff",
  },
};

export default FindTournamentPage;
