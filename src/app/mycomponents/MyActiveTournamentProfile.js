import { Paper, Typography, Box } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { Row, Col, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import BoxItemSponsoredTournments from "./BoxItemSponsoredTournaments";
import CompletedTournamentBox from "./CompletedTournamentsBox";
import BoxItemActiveTournaments from "./ItemBoxActiveTournaments";
import BoxItem from "./tournamentBoxItem";

const MyActiveTournaments = ({
  activeTournaments,
  completedTournaments,
  setViewAddSponsorsMode,
  setCurrentAllot,
  setViewTournamentDetails,
  setCurrentTournamentShowObj,
  setViewTournamentMode,
  sponsoredTournaments,
  setOpenDrawerB,
  openDrawer,
  setSelectedTournamentInfoObj,
  setSelectedTournamentBattingInfo,
  setSelectedPendingSponsorList,
  setSelectedApprovedSponsorList,
}) => {
  //const [selectedTab, setSelectedTab] = useState("Active_Tournaments");
  const tabs = [
    { name: "Active Tournaments", key: "tournaments" },
    { name: "Active Sponsorships", key: "sponsorships" },
  ];

  console.log(sponsoredTournaments);

  const [SelectedTab, setSelectedTab] = useState("tournaments");

  return (
    <Paper style={{ padding: "30px" }}>
      <Row style={{ marginBottom: "20px" }}>
        <Col lg={12}>
          <Typography
            variant="h6"
            style={{ fontWeight: "600", color: "black" }}
          >
            Your activities
          </Typography>
          <Typography variant="body2" style={{ color: "gray" }}>
            Your sponsorships and active tournaments
          </Typography>
        </Col>
      </Row>
      <Row>
        <div className="col-auto">
          <span
            className={
              SelectedTab === "tournaments" ? "tabs-active" : "tabs-not-active"
            }
            onClick={() => setSelectedTab("tournaments")}
          >
            {tabs[0].name}
          </span>
        </div>
        <div className="col-auto" style={{ marginLeft: "10px" }}>
          <span
            className={
              SelectedTab === "sponsorships" ? "tabs-active" : "tabs-not-active"
            }
            onClick={() => setSelectedTab("sponsorships")}
          >
            {tabs[1].name}
          </span>
        </div>
      </Row>
      <Row style={{ marginTop: "8px" }}>
        <Col lg={12} style={{ borderBottom: "1px solid #e0e0e0" }}></Col>
      </Row>


      {SelectedTab === "tournaments" && (
        <div style={{ marginTop: "30px" }}>
          {activeTournaments.length !== 0 ? (
            activeTournaments.map((game) => {
              return (
                <Row>
                  <Col lg={12}>
                    <BoxItemActiveTournaments
                      obj={game}
                      allot={game}
                      setCurrentAllot={setCurrentAllot}
                      setViewAddSponsorsMode={setViewAddSponsorsMode}
                      setViewTournamentDetails={setViewTournamentDetails}
                      setCurrentTournamentShowObj={setCurrentTournamentShowObj}
                      setViewTournamentMode={setViewTournamentMode}
                    />
                  </Col>
                </Row>
              );
            })
          ) : (
            <Row>
              <Col
                lg={12}
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={toAbsoluteUrl("/media/svg/empty.svg")}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "20px",
                    }}
                  />
                  <Typography variant="h6" style={{ color: "#c4c4c4" }}>
                    You have no active tournaments.
                  </Typography>
                </div>
              </Col>
            </Row>
          )}
        </div>
      )}

      {SelectedTab === "sponsorships" && (
        <div style={{ marginTop: "30px" }}>
          {sponsoredTournaments.length !== 0 ? (
            sponsoredTournaments.map((game) => {
              return (
                <Row>
                  <Col lg={12}>
                    <BoxItemSponsoredTournments
                      obj={game.gameData}
                      allot={game.data}
                      sponsorList={game.sponsoring}
                      requests={game.pending}
                      setOpenDrawerB={setOpenDrawerB}
                      openDrawer={openDrawer}
                      setSelectedTournamentInfoObj={
                        setSelectedTournamentInfoObj
                      }
                      setSelectedTournamentBattingInfo={
                        setSelectedTournamentBattingInfo
                      }
                      setSelectedPendingSponsorList={
                        setSelectedPendingSponsorList
                      }
                      setSelectedApprovedSponsorList={
                        setSelectedApprovedSponsorList
                      }
                    />
                  </Col>
                </Row>
              );
            })
          ) : (
            <Row>
              <Col
                lg={12}
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={toAbsoluteUrl("/media/svg/empty.svg")}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "20px",
                    }}
                  />
                  <Typography variant="h6" style={{ color: "#c4c4c4" }}>
                    You have no active sponsorships
                  </Typography>
                </div>
              </Col>
            </Row>
          )}
        </div>
      )}
    </Paper>
  );

  // return (
  //   <Paper style={{ padding: "30px" }}>
  //     <Row>
  //       <Col>
  //         <Typography variant="h6" gutterBottom>
  //           Player's Activities
  //         </Typography>

  //         <Typography variant="body1" gutterBottom style={{ color: "#848484" }}>
  //           Player's sponsored and active tournaments
  //         </Typography>
  //       </Col>
  //     </Row>

  //     <Row style={{ marginTop: "10px" }}>
  //       <Col lg={12}>
  //         <Tabs defaultActiveKey="active_tournaments">
  //           <Tab eventKey="active_tournaments" title="Active Tournaments">
  //             <Row>
  //               <Col lg={12}>
  //                 {activeTournaments.length === 0 ||
  //                 activeTournaments === null ? (
  //                   <Row>
  //                     <Col
  //                       lg={12}
  //                       style={{ textAlign: "center", paddingTop: "50px" }}
  //                     >
  //                       <span className="text-muted font-weight-bolder font-size-h5">
  //                         No active tournaments going on.
  //                       </span>
  //                     </Col>
  //                   </Row>
  //                 ) : (
  //                   <div>
  //                     <Row style={{ marginTop: "20px", marginBottom: "10px" }}>
  //                       <Col lg={6}>
  //                         {/* <Typography
  //                           variant="button"
  //                           gutterBottom
  //                           style={{ float: "left", color: "#848484" }}
  //                         >
  //                           Showing Active tournaments
  //                         </Typography> */}
  //                       </Col>
  //                       <Col lg={6}>
  //                         <Link to="#">
  //                           <Typography
  //                             variant="button"
  //                             gutterBottom
  //                             style={{ float: "right" }}
  //                           >
  //                             View All
  //                           </Typography>
  //                         </Link>
  //                       </Col>
  //                     </Row>
  //                     {activeTournaments.map((game) => {
  //                       return (
  //                         <Row>
  //                           <Col lg={12}>
  //                             <BoxItemActiveTournaments
  //                               obj={game}
  //                               allot={game}
  //                               setCurrentAllot={setCurrentAllot}
  //                               setViewAddSponsorsMode={setViewAddSponsorsMode}
  //                               setViewTournamentDetails={
  //                                 setViewTournamentDetails
  //                               }
  //                               setCurrentTournamentShowObj={
  //                                 setCurrentTournamentShowObj
  //                               }
  //                               setViewTournamentMode={setViewTournamentMode}
  //                             />
  //                           </Col>
  //                         </Row>
  //                       );
  //                     })}
  //                   </div>
  //                 )}
  //               </Col>
  //             </Row>
  //           </Tab>
  //           <Tab
  //             eventKey="sponsoring_tournaments"
  //             title="Sponsoring Tournaments"
  //           >
  //             <Row>
  //               <Col lg={12}>
  //                 {sponsoredTournaments.length === 0 ||
  //                 sponsoredTournaments === null ? (
  //                   <Row>
  //                     <Col
  //                       lg={12}
  //                       style={{ textAlign: "center", paddingTop: "50px" }}
  //                     >
  //                       <span className="text-muted font-weight-bolder font-size-h5">
  //                         No Sponsored tournaments going on.
  //                       </span>
  //                     </Col>
  //                   </Row>
  //                 ) : (
  //                   <div>
  //                     <Row style={{ marginTop: "20px", marginBottom: "10px" }}>
  //                       <Col lg={6}>
  //                         {/* <Typography
  //                           variant="button"
  //                           gutterBottom
  //                           style={{ float: "left", color: "#848484" }}
  //                         >
  //                           Showing Active tournaments
  //                         </Typography> */}
  //                       </Col>
  //                       <Col lg={6}>
  //                         <Link to="#">
  //                           <Typography
  //                             variant="button"
  //                             gutterBottom
  //                             style={{ float: "right" }}
  //                           >
  //                             View All
  //                           </Typography>
  //                         </Link>
  //                       </Col>
  //                     </Row>
  //                     {sponsoredTournaments.map((game) => {
  //                       return (
  //                         <Row>
  //                           <Col lg={12}>
  //                             <BoxItemSponsoredTournments
  //                               obj={game.gameData}
  //                               allot={game.data}
  //                               sponsorList={game.sponsoring}
  //                               requests={game.pending}
  //                               setOpenDrawerB={setOpenDrawerB}
  //                               openDrawer={openDrawer}
  //                               setSelectedTournamentInfoObj={
  //                                 setSelectedTournamentInfoObj
  //                               }
  //                               setSelectedTournamentBattingInfo={
  //                                 setSelectedTournamentBattingInfo
  //                               }
  //                               setSelectedPendingSponsorList={
  //                                 setSelectedPendingSponsorList
  //                               }
  //                               setSelectedApprovedSponsorList={
  //                                 setSelectedApprovedSponsorList
  //                               }
  //                             />
  //                           </Col>
  //                         </Row>
  //                       );
  //                     })}
  //                   </div>
  //                 )}
  //               </Col>
  //             </Row>
  //           </Tab>
  //           <Tab eventKey="sponsored_tournaments" title="Sponsored Tournaments">
  //             <Row>
  //               <Col
  //                 lg={12}
  //                 style={{ textAlign: "left", paddingTop: "50px" }}
  //               >

  //                 {completedTournaments.map((game)=>{
  //                   return (
  //                     <CompletedTournamentBox
  //                      obj = {game.gameData}
  //                      allot = {game.data}
  //                      sponsorList = {game.sponsoring}
  //                     />
  //                   )
  //                 })}
  //                 <span className="text-muted font-weight-bolder font-size-h5">
  //                   No active tournaments going on.
  //                 </span>
  //               </Col>
  //             </Row>
  //           </Tab>
  //         </Tabs>
  //       </Col>
  //     </Row>
  //   </Paper>
  // );
};

export default MyActiveTournaments;
