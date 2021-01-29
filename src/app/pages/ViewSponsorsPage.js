import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import queryString from "query-string";
import API from "../../apiUrl.json";
import Countdown from "react-countdown";
import _ from "lodash";

import { Button, Col, Row, Form, Badge, Spinner } from "react-bootstrap";

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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const ViewSponsorsPage = (props) => {
  const classes = useStyles();
  const [Role, setRole] = useState("");
  const [Queries, setQueries] = useState(null);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [firstTimeSuccessBox, setFirstTimeSuccessBox] = useState(false);
  const [tournamentData, setTournamentData] = useState({});
  const [tournamentId, setTournamentId] = useState();
  const [redirectFourZeroFour, setRedirectFourZeroFour] = useState(false);
  const [playersData, setPlayersData] = useState({});
  const [swapData, setSwapData] = useState({});
  const [AllSponsorsForInvitation, setAllSponsorsForInvitation] = useState([]);
  const [ActiveSponsors, setActiveSponsors] = useState([]);
  const [InvitationLoading, setInvitationLoading] = useState(false);
  const [sponrosAndApplied, setSponrosAndApplied] = useState(false);

  // For owner
  const [Owner, setOwner] = useState(false);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    //console.log(Role);
    const queries = props.match.params.id;
    //console.log(props.match.params.id);
    //console.log(queries);
    //setTournamentId(queries.id);
    setQueries(queries);
    if (queries === undefined || queries === null || queries === "") {
      setRedirectFourZeroFour(true);
    }

    if (JSON.parse(localStorage.getItem("userInfo")) === null) {
      setRedirectToLogin(true);
    } else {
      // if (
      //   queries.status === undefined ||
      //   queries.status === null ||
      //   queries.status === ""
      // ) {
      //   setFirstTimeSuccessBox(false);
      // } else if (queries.status === "new") {
      //   setFirstTimeSuccessBox(true);
      // }
      fetch(API.baseUrl + API.getSponsoredDetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: queries,
          role: localStorage.getItem("role"),
          userid:
            localStorage.getItem("role") === "player"
              ? JSON.parse(localStorage.getItem("userInfo")).player_id
              : JSON.parse(localStorage.getItem("userInfo")).sponsor_id,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.type === "owner") {
            setOwner(true);
          } else {
            setOwner(false);
            if (json.type === "sponsor") {
              if (
                !_.find(json.sponsoring, {
                  sponsor_id: JSON.parse(localStorage.getItem("userInfo"))
                    .sponsor_id,
                })
              ) {
                setSponrosAndApplied(false);
              } else {
                setSponrosAndApplied(true);
              }
            }
          }

          setTournamentData(json.tounamentData);
          setPlayersData(json.playersInfo);
          setSwapData(json.result);
          setAllSponsorsForInvitation(json.sponsors);
          setActiveSponsors(json.sponsoring);
          if (json.type === "owner") {
            setPendingRequests(json.pending);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const inviteTheSponsor = (e, obj) => {
    e.preventDefault();
    setInvitationLoading(true);
    fetch(API.baseUrl + API.sendInvitation, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sponsor_id: obj.sponsor_id,
        sponsorship_id: Queries,
      }),
    })
      .then((json) => json.json())
      .then((res) => {
        var newArr = _.remove(AllSponsorsForInvitation, function(n) {
          return n.sponsor_id !== obj.sponsor_id;
        });
        setInvitationLoading(false);
        setAllSponsorsForInvitation(newArr);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  return (
    <Box>
      {redirectFourZeroFour && <Redirect to="/error/error-v1" />}
      {redirectToLogin && <Redirect to="/login-new" />}
      <Row>
        <Col>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Sponsorship
          </Typography>
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col lg={8}>
          {firstTimeSuccessBox && (
            <Paper style={{ marginBottom: "20px" }}>
              <Row style={{ padding: "20px" }}>
                <Col lg={12}>
                  <Typography variant="h6">
                    <i
                      class="far fa-check-circle"
                      style={{ color: "green", marginRight: "20px" }}
                    ></i>
                    You have alloted sponsors successfully to this tournament.
                    <i
                      class="fas fa-times"
                      style={{ color: "gray", float: "right" }}
                      onClick={() => setFirstTimeSuccessBox(false)}
                    ></i>
                  </Typography>
                </Col>
              </Row>
            </Paper>
          )}
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6">
                  Sponsorship Details{" "}
                  <a
                    href={`https://pokerswapping.com/details/${tournamentData.sharkscope_id}`}
                    className="text-hover-primary"
                  >
                    #{tournamentData.sharkscope_id}
                  </a>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "#848484", marginTop: "10px" }}
                  >
                    Player{" "}
                    <Link to={`/players/${playersData.player_id}`}>
                      <strong>{playersData.player_name}</strong>
                    </Link>{" "}
                    is looking for{" "}
                    <strong style={{ color: "#000" }}>
                      {swapData.number_of_sponsor}
                    </strong>{" "}
                    sponsors and ready to swap{" "}
                    <strong style={{ color: "#000" }}>
                      {swapData.total_parcent}%{" "}
                    </strong>
                    of winning amount.
                  </Typography>
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col lg={4}>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    SPONSORING{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "900", color: "#F64E60" }}
                  >
                    {ActiveSponsors.length}
                  </Typography>{" "}
                </div>
              </Col>
              <Col lg={4}>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    TOTAL{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "900", color: "black" }}
                  >
                    {swapData.number_of_sponsor}
                  </Typography>{" "}
                </div>
              </Col>
              {Owner && (
                <Col lg={4}>
                  <div style={{ textAlign: "left" }}>
                    <Typography variant="button" style={{ color: "#848484" }}>
                      PENDING{" "}
                      <i
                        class="fas fa-info-circle"
                        style={{
                          marginLeft: "2px",
                          color: "#848484",
                          fontSize: "12px",
                        }}
                      ></i>
                    </Typography>
                    <br />
                    <br />
                    <Typography
                      variant="h4"
                      style={{ fontWeight: "900", color: "black" }}
                    >
                      {pendingRequests.length}
                    </Typography>{" "}
                  </div>
                </Col>
              )}
            </Row>
            <Row style={{ padding: "30px" }}>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    Alloted on{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <strong>
                      {new Date(swapData.created).toLocaleDateString("en-US")}
                    </strong>
                  </Typography>{" "}
                </div>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    EACH (%){" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <strong>{swapData.percent_to_each}</strong>
                  </Typography>{" "}
                </div>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    Total (%){" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <strong>{swapData.total_parcent}</strong>
                  </Typography>{" "}
                </div>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    BID AMOUNT{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <strong>
                      {" "}
                      {tournamentData.currency}{" "}
                      {parseFloat(
                        swapData.total_amount / swapData.number_of_sponsor
                      )}
                    </strong>
                  </Typography>{" "}
                </div>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <Typography variant="button" style={{ color: "#848484" }}>
                    TOTAL AMOUNT{" "}
                    <i
                      class="fas fa-info-circle"
                      style={{
                        marginLeft: "2px",
                        color: "#848484",
                        fontSize: "12px",
                      }}
                    ></i>
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    <strong>
                      {" "}
                      {tournamentData.currency} {swapData.total_amount}
                    </strong>
                  </Typography>{" "}
                </div>
              </Col>
            </Row>
            <Row></Row>
          </Paper>

          {/* <Paper style={{ marginTop: "20px" }}>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="h6" gutterBottom>
                  Participating Sponsors
                </Typography>
              </Col>
            </Row>
            <Divider />
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                {ActiveSponsors.length === 0 ? (
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "#848484" }}
                  >
                    Currently no sponsor sponsoring this game.
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "#848484" }}
                  >
                    {ActiveSponsors.length} participants sponsors are currently
                    sponsoring this game.
                  </Typography>
                )}
              </Col>
            </Row>
          </Paper> */}

          {Owner && ActiveSponsors.length === 0 && (
            <Paper style={{ marginTop: "20px" }}>
              <Row style={{ padding: "30px" }}>
                <Col lg={12}>
                  <Typography variant="h6" gutterBottom>
                    Invite Sponsors
                  </Typography>
                </Col>
              </Row>
              <Divider />
              <Row style={{ padding: "30px" }}>
                <Col lg={12}>
                  <List className={classes.root}>
                    {AllSponsorsForInvitation.map((item) => {
                      return (
                        <a
                          href={`/sponsor/profile/${item.sponsor_id}`}
                          target="_blank"
                        >
                          <ListItem
                            alignItems="flex-start"
                            style={{ marginTop: "10px" }}
                          >
                            <ListItemAvatar>
                              <Avatar
                                alt="Remy Sharp"
                                src="/media/users/100_1.jpg"
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.sponsor_name}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    {item.sponsor_name}
                                  </Typography>
                                  {
                                    " — I'll be in your neighborhood doing errands this…"
                                  }
                                </React.Fragment>
                              }
                            />
                            {InvitationLoading ? (
                              <Button variant="primary" disabled>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Loading...</span>
                                Invite
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                size="sm"
                                style={{
                                  float: "right",
                                  marginTop: "10px",
                                }}
                                onClick={(e) => inviteTheSponsor(e, item)}
                              >
                                Invite
                              </Button>
                            )}
                          </ListItem>
                        </a>
                      );
                    })}
                  </List>
                </Col>
              </Row>
            </Paper>
          )}

          {!sponrosAndApplied && !Owner && (
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <Link to={`/be-sponsor/${Queries}`}>
                  <Button variant="primary"> Sponsor Game + </Button>
                </Link>
              </Col>
            </Row>
          )}

          {Owner && ActiveSponsors.length !== 0 && (
            <Paper style={{ marginTop: "20px" }}>
              <Row style={{ padding: "30px" }}>
                <Col lg={12}>
                  <Typography variant="h6" gutterBottom>
                    Already Sponsorings
                  </Typography>
                </Col>
              </Row>
              <Divider />
              <Row style={{ padding: "30px" }}>
                <Col lg={12}>
                  <List className={classes.root}>
                    {ActiveSponsors.map((item) => {
                      return (
                        <a
                          href={`/sponsor/profile/${item.info.sponsor_id}`}
                          target="_blank"
                        >
                          <ListItem
                            alignItems="flex-start"
                            style={{ marginTop: "10px" }}
                          >
                            <ListItemAvatar>
                              <Avatar
                                alt="Remy Sharp"
                                src="/media/users/100_1.jpg"
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.info.sponsor_id}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    {item.info.sponsor_name}
                                  </Typography>
                                  {
                                    " — I'll be in your neighborhood doing errands this…"
                                  }
                                </React.Fragment>
                              }
                            />
                            <a href={`/messages`} target="_blank">
                              {" "}
                              <Button
                                variant="primary"
                                size="sm"
                                style={{
                                  float: "right",
                                  marginTop: "10px",
                                }}
                                onClick={(e) => inviteTheSponsor(e, item)}
                              >
                                Chat
                              </Button>
                            </a>
                          </ListItem>
                        </a>
                      );
                    })}
                  </List>
                </Col>
              </Row>
            </Paper>
          )}

          {sponrosAndApplied && (
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <Button variant="success"> Alredy Sponsoring ✅</Button>
              </Col>
            </Row>
          )}
        </Col>
        <Col lg={4}>
          <Paper>
            <Row style={{ padding: "30px" }}>
              <Col lg={12}>
                <Typography variant="body1" gutterBottom>
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
                        {getDates(tournamentData.scheduledStartUnixTime*1000)}
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
                          date={new Date(tournamentData.scheduledStartUnixTime*1000)}
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

export default ViewSponsorsPage;
