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
            }}>
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
                            style={{ fontWeight: "600" }}>
                            {getDates(tournamentData.scheduledStartUnixTime)}
                          </Typography>
                        </Badge>
                      </Col>
                      <Col lg={6}></Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "20px",
                      }}>
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
                      }}>
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
                            style={{ color: "#848484" }}>
                            Overlay
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}>
                            {tournamentData.overlay}{" "}
                          </Typography>{" "}
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div style={{ textAlign: "center" }}>
                          <Typography
                            variant="button"
                            style={{ color: "#848484" }}>
                            Rake
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}>
                            {tournamentData.rake}
                          </Typography>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div style={{ textAlign: "right" }}>
                          <Typography
                            variant="button"
                            style={{ color: "#848484" }}>
                            Stake
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}>
                            {tournamentData.stake}
                          </Typography>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                      <Col>
                        <Typography
                          variant="body1"
                          style={{ textAlign: "left" }}>
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

                <Col style={{ padding: "30px" }}>
                  <Col
                    lg={6}
                    style={{ textAlign: "left" }}
                    className="d-flex align-items-center">
                    <div className="d-flex inline align-items-center">
                    <Image
                      roundedCircle
                      src={toAbsoluteUrl("/media/users/100_2.jpg")}
                      style={{ width: "60px", height: "60px" }}
                    />
                    </div>
                    <div>
                      <span className="text-dark font-weight-bolder text-hover-primary font-size-h2">
                        {playerDetails.player_name}
                      </span>
                      <br />
                      <p className="text-muted font-weight-bolder text-hover-primary font-size-h6">
                        {playerDetails.player_email}
                      </p>
                      <ReactStars
                        style={{ float: "left" }}
                        count={5}
                        value={3.2}
                        size={12}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                  </Col>

                  <Typography
                    variant="h5"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}>
                    Create Reviews
                  </Typography>

                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={54}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />

                  <Typography
                    variant="h5"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}>
                    Add a HeadLine
                  </Typography>

                  <div className="row">
                    <div class="col pl-0 pr-0 m-5">
                      <input
                        type="text"
                        className="form-control h-auto py-5 px-6"
                        placeholder="What's Most Important to know"
                        name="Name"
                      />
                    </div>
                  </div>
                  <Typography
                    variant="h5"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}>
                    Add a Written Reviews
                  </Typography>
                  <div className="row">
                    <div class="col pl-0 pr-0 m-5">
                      <textarea
                        class="form-control form-control-sm mb-3"
                        rows="8"
                        placeholder="What did You like Dislikes?"
                        name="message"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}>
                      Submit Review
                    </button>
                  </div>
                </Col>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
}

export default SponserReviewPage;
