import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MultipleInputField from "../mycomponents/multipleInputField";
import { Box, Divider } from "@material-ui/core";
import { Card, Row, Col, Form, Spinner } from "react-bootstrap";
import JsonUrl from "../../apiUrl.json";
import axios from "axios";
import TournamentItem from "../mycomponents/tournamentItem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const FindTournamentPage = () => {
  const [selectedNetwork, setSelectedNetworks] = useState([
    { label: "PartyPoker", value: "partypoker", key: "1" },
  ]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [tournamentList, setTournamentList] = useState([]);
  const [noData, setNoData] = useState(false);

  const [networkWhichSelected, setNeworksWhichSelected] = useState([
    { label: "PartyPoker", value: "partypoker", key: "1" },
  ]);
  const [enrolmentWhichSelected, setEnrolmentWhichSelected] = useState([]);
  const [stateWhichSelected, setStateWhichSelected] = useState([]);
  const [speedWhichSelected, setSpeedWhichSelected] = useState([]);
  const [gameTypeWhichSelected, setGameTypeWhichSelected] = useState([]);
  const [prizePoolWhichSelected, setPrizePoolWhichSelected] = useState([]);

  var urlNetwork =
    JsonUrl.baseUrl + JsonUrl.getTournamentFromSpacificNetwork + "?";

  useEffect(() => {
    setShowSpinner(true);
    setTournamentList([]);
    var list = [];
    console.log("URL:", urlNetwork);

    //data
    if (selectedNetwork.length == 0) {
      setShowSpinner(false);
      setNoData(true);
    } else {
      for (var i = 0; i < selectedNetwork.length; i++) {
        urlNetwork = urlNetwork + "networks=" + selectedNetwork[i].value + "&";
      }
      //console.log(selectedFilters);
      if (selectedFilters.length == 0) {
        console.log(urlNetwork);
        setShowSpinner(false);
      } else {
        for (var k = 0; k < selectedFilters.length; k++) {
          urlNetwork =
            urlNetwork +
            selectedFilters[k].key +
            "=" +
            selectedFilters[k].value +
            "&";
        }

        console.log(urlNetwork);
        setShowSpinner(false);
      }
      setShowSpinner(true);
      fetch(urlNetwork)
        .then((response) => response.json())
        .then((data) => {
          console.log("Axios Response:", data);
          setShowSpinner(false);
          if (data.status === "ok") {
            console.log("Response:", data.result);
            setTournamentList(data.result);
            setNoData(false);
            setShowSpinner(false);
            var lenght = data.result.length;
            console.log(lenght);
            var sets = lenght / 30;
            console.log(sets);
            var pagess = Math.ceil(sets);
            console.log(pagess);
            list = Array(pagess - 1 + 1)
              .fill()
              .map((_, idx) => 1 + idx);
            //var list = Array.from(Array(pagess).keys());
          } else if (data.status === "failed") {
            setNoData(true);

            setShowSpinner(false);
          }
          //setPages(list);
          console.log("Pages:", list);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedFilters, selectedNetwork]);
  const classes = useStyles();

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
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          {showSpinner && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {tournamentList.length > 0 && (
            <TournamentItem tournamentList={tournamentList} />
          )}
        </Col>
      </Row>
    </Box>
  );
};

export default FindTournamentPage;
