import { Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import EmptyBox from "./EmptyBox";
import API from "../../apiUrl.json";

const SponsoredSponsorshipPlayer = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    fetch(API.baseUrl + API.getSponsoredSponsorshipsPlayer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player_id: user.player_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (data.status === "OK") {
        //   setList(data.sponsorships);
        // }
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
        <div></div>
      )}
    </Paper>
  );
};

export default SponsoredSponsorshipPlayer;
