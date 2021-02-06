import { Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import EmptyBox from "./EmptyBox";
import API from "../../apiUrl.json";
import BoxItemSponsoredTournments from "./BoxItemSponsoredTournaments";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const ActiveSponsorshipPlayer = ({
  setOpenDrawerB,
  openDrawer,
  setSelectedTournamentInfoObj,
  setSelectedTournamentBattingInfo,
  setSelectedPendingSponsorList,
  setSelectedApprovedSponsorList,
  setOrganicNetworks,
}) => {
  const [List, setList] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);
    fetch(API.baseUrl + API.getActiveSponsorshipsPlayer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player_id: user.player_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          setList(data.sponsorships);
          setOrganicNetworks(data.networks);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Paper style={{ padding: "20px" }}>
      {List.length === 0 ? (
        <EmptyBox Content={"No Sponsored sponsorships found."} />
      ) : (
        <div>
          <Row style={{ marginBottom: "20px" }}>
            <Col lg={12}>
              <Typography variant="h5">Active Sponsorships</Typography>
            </Col>
          </Row>
          {List.map((game) => {
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
                    setSelectedTournamentInfoObj={setSelectedTournamentInfoObj}
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
          })}
        </div>
      )}
    </Paper>
  );
};

export default ActiveSponsorshipPlayer;
