import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Row, Col, Container, Badge, Form, Button } from "react-bootstrap";
import {
  MixedWidget1,
  MixedWidget10,
  MixedWidget11,
  MixedWidget12,
  MixedWidget14,
  MixedWidget6,
} from "../../_metronic/_partials/widgets";
import { MixedWidgetCustom } from "./mixWidgetComponent";
import { TournamentHeader } from "./tournamentHeaderComponent";
import API from "./../../apiUrl.json";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  list: {
    width: 900,
  },
  viewBoxCont: {
    width: "auto",
  },
}));
const AddSponsorsDrawer = ({ setViewAddSponsorsMode, obj }) => {
  const classes = useStyles();
  //console.log("Data:", obj);
  const [totalPercentage, setTotalPercentage] = useState("");
  const [totalPercentageState, setTotalPercentageState] = useState(false);

  const [totalNumberOfSponsors, setTotalNumberOfSponsors] = useState("");
  const [totalNumberOfSponsorsState, setTotalNumberOfSponsorsState] = useState(
    true
  );

  const [percentageOfEach, setPercentageOfEach] = useState("");
  const [percentageOfEachState, setPercentageOfEachState] = useState(true);

  const [sponsorAmount, setSponsorAmount] = useState("");
  const [sponsorAmountState, setSponsorsAmountState] = useState(true);

  const [totalAmount, setTotalAmount] = useState("");
  const [totalAmountState, setTotalAmountState] = useState(true);

  const [agreeTnc, setAgreeTnc] = useState(false);

  const setPercentageValues = (value) => {
    setPercentageOfEach(totalPercentage / value);
    setSponsorsAmountState(false);
  };

  const addSponsorsAPI = (e) => {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const url = API.baseUrl + API.addSponsors;
    var body = {
      id: obj.sharkscope_id,
      network: obj.network,
      player_id: userInfo.player_id,
      number_of_sponsor: totalNumberOfSponsors,
      percent_to_each: percentageOfEach,
      total_parcent: totalPercentage,
      amount_of_each: sponsorAmount,
      total_amount: totalAmount,
      tournament_amount: totalPercentage,
      match_date_time: obj.scheduledStartUnixTime,
    };
    //console.log(body);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        if (json.status === "ok") {
          setViewAddSponsorsMode(false);
          window.location.reload(false);
        } else {
          setViewAddSponsorsMode(false);
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.reload(false);
      });
  };

  return (
    <div className={classes.list}>
      <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
        <Container>
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={12}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ fontWeight: "600" }}
                  >
                    Add Sponsors for your tournament
                  </Typography>{" "}
                </Col>
                {/* <Col>
                  <Badge
                    variant="secondary"
                    style={{ float: "right" }}
                    onClick={() => setViewAddSponsorsMode(false)}
                  >
                    {" "}
                    <i
                      style={{ float: "right", fontSize: "14px" }}
                      class="fas fa-times"
                    ></i>
                  </Badge>
                </Col> */}
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col lg={12}>
                  <span className="text-muted font-weight-bolder font-size-h5">
                    {" "}
                    Details
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <TournamentHeader
                    className="card-stretch gutter-b"
                    obj={obj}
                  />
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <MixedWidgetCustom obj={obj} />
                </Col>
              </Row> */}
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={12} style={{ textAlign: "right" }}>
                  <Badge
                    variant="secondary"
                    style={{ float: "right" }}
                    onClick={() => setViewAddSponsorsMode(false)}
                  >
                    {" "}
                    <i
                      style={{ float: "right", fontSize: "14px" }}
                      class="fas fa-times"
                    ></i>
                  </Badge>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col lg={12}>
                  <span className="text-muted font-weight-bolder font-size-h5">
                    {" "}
                    Add Sponsors
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={12}>
                  <Form>
                    <Form.Group>
                      <Form.Label>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ fontWeight: "600" }}
                        >
                          How much % of any winning are you happy to swap with
                          sponsors?
                        </Typography>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="eg. 60%"
                        value={totalPercentage}
                        onChange={(e) => {
                          setTotalPercentage(e.target.value);
                          setTotalNumberOfSponsorsState(false);
                        }}
                        disabled={totalPercentageState ? true : false}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ fontWeight: "600" }}
                        >
                          How many sponsors are you looking to swap?
                        </Typography>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="eg. 4 Sponsors"
                        value={totalNumberOfSponsors}
                        onChange={(e) => {
                          setTotalNumberOfSponsors(e.target.value);
                          setPercentageValues(e.target.value);
                        }}
                        disabled={
                          !totalNumberOfSponsorsState && totalPercentage !== ""
                            ? false
                            : true
                        }
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ fontWeight: "600" }}
                        >
                          What % of any win do you want to offer each sponsor?
                        </Typography>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="% Amount"
                        value={percentageOfEach}
                        onChange={(e) => setPercentageOfEach(e.target.value)}
                        disabled={percentageOfEachState ? true : false}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ fontWeight: "600" }}
                        >
                          How much do each sponsor have to pay for their % in
                          your tournament?
                        </Typography>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Amount of each"
                        value={sponsorAmount}
                        onChange={(e) => {
                          setSponsorAmount(e.target.value);
                          setTotalAmount(
                            totalNumberOfSponsors * e.target.value
                          );
                        }}
                        disabled={sponsorAmountState ? true : false}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ fontWeight: "600" }}
                        >
                          Total amount from sponsors?
                        </Typography>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Total Amount"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                        disabled={totalAmountState ? true : false}
                      />
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
                  <Button
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
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AddSponsorsDrawer;
