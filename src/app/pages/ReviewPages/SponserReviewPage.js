import { Box, Typography, Divider, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Col, Row, Form, Badge, Spinner } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import ReactStars from "react-rating-stars-component";
import API from "../../../apiUrl.json";

function SponserReviewPage(props) {
    
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  //   const [tournamentsDetails, setTournamentsDetails] = useState();
  const [playerDetails, setPlayerDetails] = useState({});
  const [sponserDetails, setSponserDetails] = useState();
  const [reviewDetails, setReviewDetails] = useState();
  const [tournamentData, setTournamentData] = useState({});

  useEffect(() => {
    fetch(API.baseUrl + API.reviewSponser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.match.params.id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTournamentData(json.tournamentDetails);
        setPlayerDetails(json.playerDetails);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function getDates(date) {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return (today = mm + "-" + dd + "-" + yyyy);
  }

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <Typography
            variant="h1"
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "40px",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            Rating And Reviews
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Row>
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
                            {getDates(tournamentData.scheduledStartUnixTime)}
                          </Typography>
                        </Badge>
                      </Col>
                      <Col lg={6}></Col>
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
                          <Typography
                            variant="button"
                            style={{ color: "#848484" }}
                          >
                            Overlay
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            {tournamentData.overlay}{" "}
                          </Typography>{" "}
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div style={{ textAlign: "center" }}>
                          <Typography
                            variant="button"
                            style={{ color: "#848484" }}
                          >
                            Rake
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            {tournamentData.rake}
                          </Typography>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div style={{ textAlign: "right" }}>
                          <Typography
                            variant="button"
                            style={{ color: "#848484" }}
                          >
                            Stake
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            {tournamentData.stake}
                          </Typography>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                      <Col>
                        <Typography
                          variant="body1"
                          style={{ textAlign: "left" }}
                        >
                          Vestibulum ac diam sit amet quam vehicula elementum
                          sed sit amet dui. Proin eget tortor risus. Vestibulum
                          ac diam sit amet quam vehicula elementum sed sit amet
                          dui.
                        </Typography>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Paper>
            </Col>

            <Col lg={8}>
              <Paper>
                <Row style={{ padding: "30px" }}>
                  <Col lg={12}>
                    <Typography variant="h6" gutterBottom>
                      Write Review{" "}
                    </Typography>
                  </Col>
                </Row>
                <Divider />

                <Row style={{ padding: "30px" }}>
                  <Col lg={12} style={{ textAlign: "left" }}>
                    <Row>
                      <Col lg={12}>
                        <div className="d-flex inline align-items-center">
                          <Image
                            roundedCircle
                            src={toAbsoluteUrl("/media/users/100_2.jpg")}
                            style={{ width: "80px", height: "80px" }}
                          />

                          <div style={{ marginLeft: "20px" }}>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: "600", fontSize: "20px" }}
                              gutterBottom
                            >
                              {playerDetails.player_name}
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ fontWeight: "600", color: "gray" }}
                              gutterBottom
                            >
                              {playerDetails.player_email}
                            </Typography>
                            <ReactStars
                              style={{ float: "left" }}
                              count={5}
                              value={3.2}
                              size={12}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px" }}>
                      <Col lg={12}>
                        <Typography variant="h6" gutterBottom>
                          Rate your experiance
                        </Typography>

                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={40}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "30px" }}>
                      <Col lg={12}>
                        <Typography variant="h6" gutterBottom>
                          What was the best part?
                        </Typography>

                        <div className="row">
                          <div class="col pl-0 pr-0 m-5">
                            <input
                              type="text"
                              className="form-control h-auto py-5 px-6"
                              placeholder="Never expected such huge profit!"
                              name="Name"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                      <Col lg={12}>
                        <Typography variant="h6" gutterBottom>
                          Please describe your experinece with player.
                        </Typography>
                        <div className="row">
                          <div class="col pl-0 pr-0 m-5">
                            <textarea
                              class="form-control form-control-sm mb-3"
                              rows="8"
                              placeholder="eg. I like the player's stratagies"
                              name="message"
                            ></textarea>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <button
                          className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
                        >
                          Submit Review
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
}

export default SponserReviewPage;
