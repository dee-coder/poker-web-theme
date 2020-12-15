import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Col, Row, Form, Badge, Spinner } from "react-bootstrap";
import Countdown from "react-countdown";
import { Link, Redirect } from "react-router-dom";
import API from "../../apiUrl.json";
import _ from "lodash";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    //return <Completionist />;
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
const BeSponsorPage = (props) => {
  const [tournamentId, setTournamentId] = useState();
  const [forDates, setForDates] = useState();
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [successRedirect, setSuccessRedirect] = useState(false);
  const [userINFO, setUserINFO] = useState({});

  const [agreeTnc, setAgreeTnc] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const [callBackId, setCallBackId] = useState();

  const [playerID, setPlayerID] = useState();
  const [playerInfo, setPlayerInfo] = useState({});
  const [tournamentData, setTournamentData] = useState({});
  const [bettingInfo, setBettingInfo] = useState({});
  const [networks, setNetworks] = useState([]);
  const [url, seturl] = useState();
  const [sponsorid, setSponsorId] = useState();

  useEffect(() => {
    //setTournamentId(params.allotid);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserINFO(userInfo);
    setSponsorId(JSON.parse(localStorage.getItem("userInfo")).sponsor_id);
    console.log(props.match.params);

    if (JSON.parse(localStorage.getItem("userInfo")) === null) {
      setRedirectToLogin(true);
    } else {
      fetch(API.baseUrl + API.getAllotDetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allotid: props.match.params.allotid }),
      })
        .then((response) => response.json())
        .then((json) => {
          //console.log(json);
          setBettingInfo(json.res.betttingInfo);
          setPlayerInfo(json.res.playerInfo);
          setTournamentData(json.res.tournamentInfo);
          setNetworks(json.res.networks);
          var data = _.find(json.res.networks, [
            "name",
            json.res.tournamentInfo.network,
          ]);
          //console.log(data);
          var url = "https://pokerswapping.com/networks/" + data.page_slug;
          seturl(url);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  const makeHitApi = (e) => {
    e.preventDefault();
    setLoadSpinner(true);
    fetch(API.baseUrl + API.applySponsorship, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agree: agreeTnc,
        sponsorid: sponsorid,

        allotmentid: props.match.params.allotid,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          setSuccessRedirect(true);
          setCallBackId(res.id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      {redirectToLogin && <Redirect to="/login-new" />}
      {successRedirect && (
        <Redirect to={`/sponsor-profile?id=${callBackId}&tab=pending`} />
      )}
      <Row style={{ marginBottom: "40px" }}>
        <Col lg={12} style={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Be Sponsor
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6">
                  Be ac Sponsors to{" "}
                  <a
                    href={`https://pokerswapping.com/details/${tournamentId}`}
                    className="text-hover-primary"
                  >
                    #{tournamentId}
                  </a>
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6">
                  SPONSORSHIP AGREEMENT - Terms and Conditions
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#848484" }}>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Proin eget tortor risus.
                </Typography>
                <br />
                <br />
                <div style={{ overflow: "scroll", height: "400px" }}>
                  <Typography variant="button">
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Proin eget tortor risus. Praesent sapien massa,
                    convallis a pellentesque nec, egestas non nisi. Proin eget
                    tortor risus. Sed porttitor lectus nibh. Cras ultricies
                    ligula sed magna dictum porta. Donec sollicitudin molestie
                    malesuada. Sed porttitor lectus nibh. Nulla porttitor
                    accumsan tincidunt. Donec sollicitudin molestie malesuada.
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim.
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum congue leo eget malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui. Donec
                    sollicitudin molestie malesuada. Proin eget tortor risus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus
                    magna justo, lacinia eget consectetur sed, convallis at
                    tellus. Nulla porttitor accumsan tincidunt. Pellentesque in
                    ipsum id orci porta dapibus. Proin eget tortor risus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Cras
                    ultricies ligula sed magna dictum porta. Pellentesque in
                    ipsum id orci porta dapibus. Cras ultricies ligula sed magna
                    dictum porta. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar a. Nulla quis lorem ut libero malesuada
                    feugiat. Curabitur aliquet quam id dui posuere blandit.
                    Donec rutrum congue leo eget malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui. Vivamus
                    suscipit tortor eget felis porttitor volutpat. Curabitur
                    arcu erat, accumsan id imperdiet et, porttitor at sem. Cras
                    ultricies ligula sed magna dictum porta. Pellentesque in
                    ipsum id orci porta dapibus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui. Proin eget tortor
                    risus. Nulla porttitor accumsan tincidunt. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Mauris blandit
                    aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies
                    ligula sed magna dictum porta. Pellentesque in ipsum id orci
                    porta dapibus. Donec rutrum congue leo eget malesuada. Donec
                    sollicitudin molestie malesuada. Praesent sapien massa,
                    convallis a pellentesque nec, egestas non nisi. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi. Donec rutrum congue leo eget malesuada. Sed porttitor
                    lectus nibh. Curabitur non nulla sit amet nisl tempus
                    convallis quis ac lectus. Nulla quis lorem ut libero
                    malesuada feugiat. Sed porttitor lectus nibh. Donec
                    sollicitudin molestie malesuada. Praesent sapien massa,
                    convallis a pellentesque nec, egestas non nisi. Nulla quis
                    lorem ut libero malesuada feugiat. Vivamus suscipit tortor
                    eget felis porttitor volutpat. Nulla quis lorem ut libero
                    malesuada feugiat. Nulla porttitor accumsan tincidunt.
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus.
                  </Typography>
                </div>
                <Form style={{ marginTop: "20px" }}>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      label="I Agree with all terms and conditions described on top section"
                      value={agreeTnc}
                      onChange={() =>
                        agreeTnc ? setAgreeTnc(false) : setAgreeTnc(true)
                      }
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row style={{ padding: "30px" }}>
              <Col>
                {loadSpinner ? (
                  <Button variant="primary" disabled>
                    Sponsors{" "}
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={(e) => makeHitApi(e)}
                    disabled={agreeTnc ? false : true}
                  >
                    Add Sponsors
                  </Button>
                )}
                <Link to={`/sponsor-profile`}>
                  <Button style={{ marginLeft: "20px" }} variant="secondary">
                    Cancel
                  </Button>
                </Link>
                {/* <Button
                   onClick={(e) => addSponsorsAPI(e)}
                   disabled={
                     agreeTnc &&
                     totalPercentage !== "" &&
                     totalNumberOfSponsors !== "" &&
                     percentageOfEach !== "" &&
                     sponsorAmount !== "" &&
                     totalAmount !== ""
                       ? false
                       : true
                   }
                   style={{ minWidth: "100%", marginTop: "20px" }}
                   type="submit"
                 >
                   Submit form
                 </Button> */}
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={4}>
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6" gutterBottom>
                  Tournamant Details{" "}
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={6}>
                    <Badge variant="secondary" style={{ float: "left" }}>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: "600" }}
                      >
                        {getDates(tournamentData.scheduledStartTime)}
                      </Typography>
                    </Badge>
                  </Col>
                  <Col lg={6}>
                    <Badge variant="danger" style={{ float: "right" }}>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: "600" }}
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
                          style={{ float: "right" }}
                          date={new Date(tournamentData.scheduledStartTime)}
                          renderer={renderer}
                        />
                      </Typography>
                    </Badge>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <Col>
                    <Typography variant="h5" gutterBottom>
                      {" "}
                      {tournamentData.name}
                    </Typography>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <Col>
                    <Typography variant="button" gutterBottom>
                      {" "}
                      {tournamentData.network}
                    </Typography>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col lg={4}>
                    <div style={{ textAlign: "left" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Overlay
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.overlay}{" "}
                      </Typography>{" "}
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ textAlign: "center" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Rake
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.rake}
                      </Typography>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ textAlign: "right" }}>
                      <Typography variant="button" style={{ color: "#848484" }}>
                        Stake
                      </Typography>
                      <br />
                      <Typography variant="h4" style={{ fontWeight: "900" }}>
                        {tournamentData.stake}
                      </Typography>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <Typography variant="body1" style={{ textAlign: "left" }}>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Proin eget tortor risus. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui.
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Box>
  );
};

export default BeSponsorPage;
