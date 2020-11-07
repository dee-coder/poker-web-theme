import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AdvanceTablesWidget4 } from "../../_metronic/_partials/widgets";
import TournamentItem from "../mycomponents/tournamentItem";
import axios from "axios";
import JsonUrl from "../../apiUrl.json";
import { Alert } from "@material-ui/lab";

const TournamentByDate = (props) => {
  var { date } = props.match.params;

  useEffect(() => {
    var url =
      JsonUrl.baseUrl +
      JsonUrl.getGamesByDate +
      "?date=" +
      date.replace(/-/g, "/");
    //console.log("Url Requested:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTournamentList(data.result);
        //console.log(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //hooks for storing tournaments
  const [tournamentList, setTournamentList] = useState([]);
  return (
    <Box component="span" m={0}>
      {tournamentList.length > 0 && (
        <TournamentItem tournamentList={tournamentList} />
      )}
      {tournamentList.length === 0 && (
        <Card>
          <Card.Body style={{ textAlign: "center" }}>
            No Games found on {date}.
          </Card.Body>
        </Card>
      )}
    </Box>
  );
};

export default TournamentByDate;
