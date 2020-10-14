import { Box, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
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
const PlayerProfilePage = () => {
  const [statisticsSetData, setStatisticsSetData] = useState([]);
  const [states, setStates] = useState([]);
  const [completedTournaments, setCompletedTournaments] = useState([]);

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
        //console.log(stats);
        // console.log(stats.playerDetails.Statistics.StatisticalDataSet);
        setStates(stats.playerDetails.Statistics.Statistic);

        setStatisticsSetData(stats.playerDetails.Statistics.StatisticalDataSet);
        //console.log(statisticsSetData);

        //console.log(states);

        setCompletedTournaments(
          stats.playerDetails.RecentTournaments.Tournament
        );

        //console.log(statistics);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Row>
        <Col lg={4}>
          <Paper>
            <ProfileBoxPlayer
              className="gutter-b card-stretch"
              chartColor="danger"
              stat={states}
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
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab
                eventKey="graph"
                title="Graph"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <PlayerStatisticsGraph className="gutter-b card-stretch" />
              </Tab>
              <Tab
                eventKey="tournaments"
                title="Tournaments"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <CompletedTournamentsTable
                  tournamentList={completedTournaments}
                />
              </Tab>
              <Tab
                eventKey="statistics"
                title="Statistics"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <p>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi. Nulla
                  porttitor accumsan tincidunt. Proin eget tortor risus. Donec
                  rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque in ipsum id orci
                  porta dapibus. Sed porttitor lectus nibh. Curabitur non nulla
                  sit amet nisl tempus convallis quis ac lectus. Curabitur
                  aliquet quam id dui posuere blandit.
                </p>
              </Tab>
              <Tab
                eventKey="event"
                title="Event"
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <p>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi. Nulla
                  porttitor accumsan tincidunt. Proin eget tortor risus. Donec
                  rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque in ipsum id orci
                  porta dapibus. Sed porttitor lectus nibh. Curabitur non nulla
                  sit amet nisl tempus convallis quis ac lectus. Curabitur
                  aliquet quam id dui posuere blandit.
                </p>
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
