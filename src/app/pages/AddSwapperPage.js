import { Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Col, Row, Form, Badge, Spinner } from "react-bootstrap";
import Countdown from "react-countdown";
import { Link, Redirect } from "react-router-dom";
import API from "../../apiUrl.json";

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
const AddSwapperPage = (props) => {
  const [tournamentId, setTournamentId] = useState();
  const [tournamentData, setTournamentData] = useState({});
  const [forDates, setForDates] = useState();
  const [loadSpinner, setLoadSpinner] = useState(false);
  const [successRedirect, setSuccessRedirect] = useState(false);
  const [userINFO, setUserINFO] = useState({});

  const [totalPercentage, setTotalPercentage] = useState("");

  const [agreeTnc, setAgreeTnc] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const [callBackId, setCallBackId] = useState();

  useEffect(() => {
    const params = props.match.params;
    setTournamentId(params.id);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserINFO(userInfo);
    if (JSON.parse(localStorage.getItem("userInfo")) === null) {
      setRedirectToLogin(true);
    } else {
      fetch(API.baseUrl + API.getTournamentById + "?id=" + params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setTournamentData(json.result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  //   const setPercentageValues = (value) => {
  //     setPercentageOfEach(totalPercentage / value);
  //     setSponsorsAmountState(false);
  //   };

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
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const url = API.baseUrl + API.createSwapping;
    var body = {
      sharkscope_id: tournamentData.sharkscope_id,
      network: tournamentData.network,
      creator: userInfo.player_id,
      swap_percentage: totalPercentage,
      scheduled_on: tournamentData.scheduledStartTime,
      //   percent_to_each: percentageOfEach,
      //   total_parcent: totalPercentage,
      //   amount_of_each: sponsorAmount,
      //   total_amount: totalAmount,
      //   tournament_amount: totalPercentage,
      //   match_date_time: tournamentData.scheduledStartUnixTime,
    };
    console.log(body);
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
        if (json.status === "ok") {
          setCallBackId(json.result.id);
          setSuccessRedirect(true);
          //setViewAddSponsorsMode(false);
          //window.location.reload(false);
        } else {
          //setViewAddSponsorsMode(false);
          //window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
        // window.location.reload(false);
      });
  };

  //   const addSponsorsAPI = (e) => {
  //     var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //     const url = API.baseUrl + API.addSponsors;
  //     var body = {
  //       id: obj.sharkscope_id,
  //       network: obj.network,
  //       player_id: userInfo.player_id,
  //       number_of_sponsor: totalNumberOfSponsors,
  //       percent_to_each: percentageOfEach,
  //       total_parcent: totalPercentage,
  //       amount_of_each: sponsorAmount,
  //       total_amount: totalAmount,
  //       tournament_amount: totalPercentage,
  //       match_date_time: obj.scheduledStartUnixTime,
  //     };
  //     console.log(body);
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //         if (json.status === "ok") {
  //           setViewAddSponsorsMode(false);
  //           window.location.reload(false);
  //         } else {
  //           setViewAddSponsorsMode(false);
  //           window.location.reload(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         window.location.reload(false);
  //       });
  //   };

  return (
    <Box>
      {redirectToLogin && <Redirect to="/login-new" />}
      {successRedirect && (
        <Redirect to={`/view-swap?id=${callBackId}&status=new`} />
      )}
      <Row>
        <Col lg={8}>
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6">
                  Swap With Players to{" "}
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
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>
                      <Typography
                        variant="body1"
                        gutterBottom
                        style={{ fontWeight: "400" }}
                      >
                        How much % of any winning are you happy to swap with a
                        player?
                      </Typography>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      max="90"
                      placeholder="eg. 60%"
                      value={totalPercentage}
                      onChange={(e) => {
                        setTotalPercentage(e.target.value);
                      }}
                    />
                    {totalPercentage > 90 || totalPercentage < 0 ? (
                      <Form.Label style={{ marginTop: "30px" }}>
                        <span className="text-danger">
                          {" "}
                          Maximum rate of swapping is 90%.
                        </span>
                      </Form.Label>
                    ) : (
                      <span></span>
                    )}
                  </Form.Group>

                  <Form.Group style={{ marginTop: "20px" }}>
                    <Form.Check
                      check={agreeTnc ? true : false}
                      required
                      onChange={(e) => {
                        agreeTnc ? setAgreeTnc(false) : setAgreeTnc(true);
                      }}
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                </Form>
                {loadSpinner ? (
                  <Button variant="primary" disabled>
                    Add Sponsors{" "}
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
                    disabled={
                      agreeTnc &&
                      totalPercentage !== "" &&
                      totalPercentage <= "90" &&
                      totalPercentage > 0
                        ? false
                        : true
                    }
                  >
                    Swap
                  </Button>
                )}
                <Link to={`/details/${tournamentId}`}>
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

export default AddSwapperPage;
