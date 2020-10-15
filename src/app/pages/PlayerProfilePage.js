import { Box, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Tab, Badge } from "react-bootstrap";
import _ from "lodash";
import SVG from "react-inlinesvg";

import {
  ListsWidget10,
  ListsWidget11,
  AdvanceTablesWidget1,
  MixedWidget6,
  MixedWidget10,
  MixedWidget11,
  MixedWidget12,
  MixedWidget1,
  TilesWidget1,
  TilesWidget3,
  TilesWidget10,
  TilesWidget11,
  TilesWidget12,
  TilesWidget13,
  TilesWidget14,
} from "../../_metronic/_partials/widgets";
import { PlayerStatisticsGraph } from "../mycomponents/playerStatisticsGraph";
import { ProfileBoxPlayer } from "../mycomponents/profileBoxPlayer";
import JsonUrl from "../../apiUrl.json";
import CompletedTournamentsTable from "../mycomponents/completedTournamentsTable";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import CompletedTournamentBoxItem from "../mycomponents/completedTournamentItemBox";
const PlayerProfilePage = () => {
  const [statistics, setStatistics] = useState([]);
  const [recentTournaments, setRecentTournaments] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [event, setEvents] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    var info = JSON.parse(localStorage.getItem("userInfo"));
    var body = { id: info.player_id };

    var url = JsonUrl.baseUrl + JsonUrl.playerInfo;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        var stats = JSON.parse(json.result.player_details_json);
        console.log(stats);
        setRecentTournaments(stats.playerDetails.RecentTournaments.Tournament);
        setDataSet(stats.playerDetails.Statistics.StatisticalDataSet);
        setStatistics(stats.playerDetails.Statistics.Statistic);

        setEvents(stats.playerDetails.Statistics.Timeline.Event);

        var ar = stats.playerDetails.Statistics.StatisticalDataSet;
        var ob = ar[0];
        console.log(ob.Data);
        setGraphData(ob.Data);

        //setGraphData(stats.playerDetails.Statistics.StatisticalDataSet[0]);
        //console.log(stats.playerDetails.Statistics.StatisticalDataSet[0]);

        //console.log(statistics);
      })
      .catch((err) => console.log(err));
  }, []);

  function getHumanDate(date) {
    var theDate = new Date(date * 1000);
    var dateString = theDate.toGMTString();

    return dateString;
  }

  return (
    <Box>
      <Row>
        <Col lg={4}>
          <Paper>
            <ProfileBoxPlayer
              className="gutter-b card-stretch"
              chartColor="danger"
              statistics={statistics}
            />
          </Paper>
        </Col>
        <Col lg={8}>
          <Paper>
            <ListsWidget10 className="card-stretch gutter-b" />
          </Paper>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Paper style={{ padding: "20px" }}>
            <Tabs defaultActiveKey="graph" id="uncontrolled-tab-example">
              <Tab
                eventKey="graph"
                title="Graph"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <PlayerStatisticsGraph
                  data={graphData}
                  className="gutter-b card-stretch"
                />
              </Tab>
              <Tab
                eventKey="tournaments"
                title="Tournaments"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                {recentTournaments.map((game) => {
                  return <CompletedTournamentBoxItem obj={game} />;
                })}
              </Tab>
              <Tab
                eventKey="statistics"
                title="Statistics"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <Row style={{ marginTop: "20px" }}>
                  <Col lg={4}>
                    {statistics.slice(0, statistics.length / 3).map((row) => {
                      return (
                        <Row style={{ marginTop: "20px" }}>
                          <Col lg={12}>
                            <span className="text-dark font-weight-bolder text-hover-primary font-size-h6">
                              {row["@id"]} :
                            </span>

                            <span
                              style={{ marginLeft: "10px" }}
                              className="text-dark font-weight-normal text-hover-primary "
                            >
                              {row["$"]}
                            </span>
                          </Col>
                        </Row>
                      );
                    })}
                  </Col>
                  <Col lg={4}>
                    {statistics
                      .slice(statistics.length / 3, (statistics.length / 3) * 2)
                      .map((row) => {
                        return (
                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <span className="text-dark font-weight-bolder text-hover-primary font-size-h6">
                                {row["@id"]} :
                              </span>

                              <span
                                style={{ marginLeft: "10px" }}
                                className="text-dark font-weight-norml text-hover-primary "
                              >
                                {row["$"]}
                              </span>
                            </Col>
                          </Row>
                        );
                      })}
                  </Col>
                  <Col lg={4}>
                    {statistics
                      .slice((statistics.length / 3) * 2, statistics.length)
                      .map((row) => {
                        return (
                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <span className="text-dark font-weight-bolder text-hover-primary font-size-h6">
                                {row["@id"]} :
                              </span>

                              <span
                                style={{ marginLeft: "10px" }}
                                className="text-dark font-weight-normal text-hover-primary "
                              >
                                {row["$"]}
                              </span>
                            </Col>
                          </Row>
                        );
                      })}
                  </Col>
                </Row>
              </Tab>
              <Tab
                eventKey="event"
                title="Event"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                {/* {event.map((ev) => {
                  {
                    return(_.has(ev, "@code") && (
                     
                    );
                   
                    }
                    );
                })} */}
                <Row>
                  <Col lg={6}>
                    {event.slice(0, event.length / 2).map((ev) => {
                      return (
                        <div>
                          {_.has(ev, "@code") && (
                            <div className="bg-light-primary rounded p-5 mb-9">
                              <Row>
                                <Col lg={12}>
                                  <Row>
                                    <Col lg={6}>
                                      <Badge variant="primary">
                                        {ev["@category"]}
                                      </Badge>
                                    </Col>
                                    <Col lg={6} style={{ textAlign: "right" }}>
                                      <span className="text-muted font-weight-normal">
                                        {getHumanDate(ev["@date"])}
                                      </span>
                                    </Col>
                                  </Row>
                                  <Row style={{ marginTop: "15px" }}>
                                    <Col lg={8}>
                                      <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a
                                          href="#"
                                          className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                          {ev["@name"]}
                                        </a>
                                        <span className="text-muted font-weight-bold">
                                          {ev["@description"]}
                                        </span>
                                      </div>
                                    </Col>
                                    <Col lg={4} style={{ textAlign: "right" }}>
                                      <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <span
                                          className="font-weight-bolder text-success py-1 font-size-lg"
                                          style={{ float: "right" }}
                                        >
                                          {ev["@network"]}
                                        </span>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </Col>
                  <Col lg={6}>
                    {event.slice(event.length / 2, event.length).map((ev) => {
                      return (
                        <div>
                          {_.has(ev, "@code") && (
                            <div className="bg-light-primary rounded p-5 mb-9">
                              <Row>
                                <Col lg={12}>
                                  <Row>
                                    <Col lg={6}>
                                      <Badge variant="primary">
                                        {ev["@category"]}
                                      </Badge>
                                    </Col>
                                    <Col lg={6} style={{ textAlign: "right" }}>
                                      <span className="text-muted font-weight-normal">
                                        {getHumanDate(ev["@date"])}
                                      </span>
                                    </Col>
                                  </Row>
                                  <Row style={{ marginTop: "15px" }}>
                                    <Col lg={8}>
                                      <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <a
                                          href="#"
                                          className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                          {ev["@name"]}
                                        </a>
                                        <span className="text-muted font-weight-bold">
                                          {ev["@description"]}
                                        </span>
                                      </div>
                                    </Col>
                                    <Col lg={4} style={{ textAlign: "right" }}>
                                      <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <span
                                          className="font-weight-bolder text-success py-1 font-size-lg"
                                          style={{ float: "right" }}
                                        >
                                          {ev["@network"]}
                                        </span>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    </Box>

    // <>
    //   {" "}
    //   <div className="row">
    //     <div className="col-xl-4">
    //       <TilesWidget1 className="gutter-b card-stretch" chartColor="danger" />
    //     </div>
    //     <div className="col-xl-8">
    //       <div className="row">
    //         <div className="col-xl-3">
    //           <TilesWidget3 className="gutter-b" widgetHeight="150px" />
    //         </div>
    //         <div className="col-xl-9">
    //           <TilesWidget10 className="gutter-b" widgetHeight="150px" />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-xl-6">
    //           <TilesWidget13 className="gutter-b" widgetHeight="175px" />
    //           <div className="row">
    //             <div className="col-xl-6">
    //               <TilesWidget11
    //                 className="gutter-b"
    //                 baseColor="primary"
    //                 widgetHeight="150px"
    //               />
    //             </div>
    //             <div className="col-xl-6">
    //               <TilesWidget12
    //                 className="gutter-b"
    //                 iconColor="success"
    //                 widgetHeight="150px"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-xl-6">
    //           <TilesWidget14 className="gutter-b card-stretch" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-6 col-xxl-4">
    //       <MixedWidget6 className="gutter-b card-stretch" chartColor="danger" />
    //     </div>

    //     <div className="col-lg-6 col-xxl-8">
    //       <AdvanceTablesWidget1 className="card-stretch gutter-b" />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-xl-4">
    //       <MixedWidget10 className="card-stretch gutter-b" />
    //     </div>

    //     <div className="col-xl-4">
    //       <MixedWidget11 className="card-stretch gutter-b" />
    //     </div>

    //     <div className="col-xl-4">
    //       <MixedWidget12 className="card-stretch gutter-b" />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-lg-6">
    //       <ListsWidget10 className="card-stretch gutter-b" />
    //     </div>
    //     <div className="col-lg-6">
    //       <ListsWidget11 className="card-stretch gutter-b" />
    //     </div>
    //   </div>
    // </>
  );
};

export default PlayerProfilePage;