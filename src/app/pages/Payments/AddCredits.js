import { Box, Paper, Typography } from "@material-ui/core";
import { Link, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import API from "../../../apiUrl.json";
import _, { set } from "lodash";

import axios from "axios";

const AddCredits = () => {
  const [SelectedTab, setSelectedTab] = useState("internal");
  const [WalletInfo, setWalletInfo] = useState({});
  const [credits, setCredits] = useState();
  const [validCredit, setValidCredit] = useState(0);
  const [currency, setCurrency] = useState();
  const [changeCurrency, setChangeCurrency] = useState();
  const [variable, setVariable] = useState(0.0);
  useEffect(() => {
    let role = localStorage.getItem("role");
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    fetch(API.baseUrl + API.getWalletAndTransactions, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: role === "player" ? userInfo.player_id : userInfo.sponsor_id,
        role: role,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setWalletInfo(json.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var currencies = [
    "CAD",
    "HKD",
    "PHP",
    "ISK",
    "DKK",
    "HUF",
    "CZK",
    "GBP",
    "RON",
    "SEK",
    "IDR",
    "INR",
    "BRL",
    "RUB",
    "HRK",
    "JPY",
    "THB",
    "CHF",
    "EUR",
    "MYR",
    "BGN",
    "TRY",
    "CNY",
    "NOK",
    "NZD",
    "ZAR",
    "USD",
    "MXN",
    "SGD",
    "AUD",
    "ILS",
    "KRW",
    "PLN",
  ];
  const axios = require("axios");
  useEffect(() => {
    var url = "https://api.exchangeratesapi.io/latest?base=USD";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((json) => json.json())
      .then((res) => {
        setChangeCurrency(res.rates);
        // console.log(res.rates.AUD);
      })
      .catch((err) => console.log(err));
  }, [variable]);

  const tabs = [
    { name: " Internal Transactions", key: "internal" },
    { name: " External Transactions", key: "external" },
  ];

  const selectCredits = (Value) => {
    console.log(Value);
    console.log(variable);
    console.log(changeCurrency);

    setCurrency(Value === "Select Your Currency" ? null : Value);

    const result = _.filter(changeCurrency, function(value, key) {
      //console.log(value,key);

      return key === Value ? value : null;
    });
    console.log(result);
    setVariable(result[0] * validCredit);
  };

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-start">
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "white" }}
            >
              Add Credits In Your Wallets
            </Typography>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Row style={{ marginTop: "30px" }}>
            <Col lg={4}>
              <Paper>
                <div
                  className="d-flex flex-column"
                  style={{
                    padding: "30px",
                  }}
                >
                  <Row style={{ marginBottom: "20px" }}>
                    <Col lg={12}>
                      <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "600",
                            color: "black",
                            float: "left",
                          }}
                        >
                          Your Available Credits is
                        </Typography>
                        {/* <Link to="addCredits">
                        <Button variant="primary" style={{ float: "right" }}>
                          Add Credits to Wallet +
                        </Button>
                        </Link> */}
                      </div>
                      {/* <Typography variant="body1">

                    </Typography> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row align-items-center">
                        <div className="d-flex flex-row align-items-center">
                          <div
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              marginRight: "20px",
                            }}
                          >
                            <Typography variant="button">
                              Sponsor Credits
                            </Typography>
                            <br />
                            <Typography
                              variant="h4"
                              style={{
                                fontWeight: "800",
                                marginTop: "10px",
                                color: "black",
                              }}
                            >
                              {parseFloat(WalletInfo.sponsor_credits).toFixed(
                                2
                              )}
                            </Typography>
                            <br />
                            <Typography
                              variant="body1"
                              style={{ color: "gray" }}
                            >
                              Sponsor Credits
                            </Typography>
                          </div>
                          <div
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                              marginRight: "20px",
                              paddingRight: "40px",
                              borderRight: "1px solid #c4c4c4",
                            }}
                          >
                            <Typography variant="button">
                              Payment Credits
                            </Typography>
                            <br />
                            <Typography
                              variant="h4"
                              style={{
                                fontWeight: "800",
                                marginTop: "10px",
                                color: "black",
                              }}
                            >
                              {parseFloat(WalletInfo.payment_credits).toFixed(
                                2
                              )}
                            </Typography>
                            <hr />
                            <Typography
                              variant="body1"
                              style={{ color: "gray" }}
                            >
                              Sponsor Credits
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Paper>
            </Col>
            <Col lg={8}>
              <Paper>
                <div
                  className="d-flex flex-column"
                  style={{
                    padding: "30px",
                  }}
                >
                  <Row>
                    <Col lg={12}>
                      <Typography
                        variant="h6"
                        style={{
                          fontWeight: "600",
                          color: "black",
                          float: "left",
                        }}
                      >
                        Enter Credit Amount
                      </Typography>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "10px" }}>
                    <Col lg={12}>
                      <div className="form-group fv-plugins-icon-container">
                        <input
                          placeholder="Credits"
                          type="number"
                          className={`form-control form-control-solid h-auto py-5 px-6`}
                          name="email"
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "black",
                            width: "300px",
                          }}
                          value={validCredit}
                          onChange={(e) => setValidCredit(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>

                  {validCredit !== 0 && (
                    <div>
                      <Row>
                        <Col lg={12}>
                          <Typography
                            variant="h6"
                            style={{
                              fontWeight: "600",
                              color: "black",
                              float: "left",
                            }}
                          >
                            Select Your Desire Currency
                          </Typography>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={12}>
                          <div
                            className="form-group fv-plugins-icon-container"
                            style={{ marginTop: "20px" }}
                          >
                            <select
                              onChange={(e) => {
                                selectCredits(e.target.value);
                              }}
                              // onChange={(e)=>selectCredits()}
                              className={`form-control form-control-solid h-auto py-5 px-6`}
                              style={{
                                color: "black",
                                width: "300px",
                                height: "40px",
                              }}
                            >
                              <option value={null}>Select Your Currency</option>
                              {currencies.map((cur) => {
                                return <option value={cur}>{cur}</option>;
                              })}
                            </select>
                          </div>
                        </Col>
                      </Row>

                      {currency && (
                        <div>
                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <div
                                style={{
                                  paddingBottom: "5px",
                                  paddingTop: "5px",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontWeight: "600",
                                    color: "black",
                                    float: "left",
                                  }}
                                >
                                  Total Amount
                                </Typography>
                              </div>
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={12}>
                              {currency && (
                                <Typography variant="H6">
                                  {!currency ? "USD" : currency} &nbsp;
                                  {variable.toFixed(2)}{" "}
                                </Typography>
                              )}
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <div
                                style={{
                                  paddingBottom: "5px",
                                  paddingTop: "5px",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontWeight: "600",
                                    color: "black",
                                    float: "left",
                                  }}
                                >
                                  Charges
                                </Typography>
                              </div>
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={12}>
                              {currency && (
                                <Typography variant="H6">
                                  {!currency ? "USD" : currency} &nbsp;
                                  {(variable * (5 / 100)).toFixed(2)}{" "}
                                </Typography>
                              )}
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <div
                                style={{
                                  paddingBottom: "5px",
                                  paddingTop: "5px",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontWeight: "600",
                                    color: "black",
                                    float: "left",
                                  }}
                                >
                                  You balance after this
                                </Typography>
                              </div>
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={12}>
                              {currency && (
                                <Typography variant="body">
                                  {(
                                    parseFloat(WalletInfo.sponsor_credits) +
                                    parseFloat(validCredit)
                                  ).toFixed(2)}{" "}
                                </Typography>
                              )}
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <div
                                style={{
                                  paddingBottom: "5px",
                                  paddingTop: "5px",
                                }}
                              >
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontWeight: "600",
                                    color: "black",
                                    float: "left",
                                  }}
                                >
                                  Total Payable Amount
                                </Typography>
                              </div>
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={12}>
                              {currency && (
                                <Typography variant="h5">
                                  {!currency ? "USD" : currency} &nbsp;
                                  <span style={{ fontWeight: "900" }}>
                                    {(variable * (5 / 100) + variable).toFixed(
                                      2
                                    )}{" "}
                                  </span>
                                </Typography>
                              )}
                            </Col>
                          </Row>

                          <Row
                            style={{ marginTop: "20px", marginBottom: "30px" }}
                          >
                            <Col lg={12}>
                              <Typography
                                variant="body"
                                style={{
                                  fontWeight: "400",
                                  fontSize: "12px",
                                  color: "gray",
                                }}
                              >
                                Lorem ipsum dolor sit amet, et est docendi
                                definitionem, at odio saepe nostro eam, id duo
                                iudicabit iracundia sententiae. Eirmod invenire
                                indoctum vel ne, nec meis option fabellas ei. No
                                altera definitiones sit, pri fugit assentior te.
                                Qui te mutat paulo oratio, vero decore nostrud
                                duo ea. Pro facer volumus adversarium ne.
                              </Typography>
                            </Col>
                          </Row>

                          <Row style={{ marginTop: "20px" }}>
                            <Col lg={12}>
                              <Button
                                variant="primary"
                                className="d-flex align-items-center"
                                style={{
                                  height: "50px",
                                  fontSize: "18px",
                                  fontWeight: "400",
                                }}
                              >
                                Pay Securely{" "}
                                <i
                                  style={{ marginLeft: "10px" }}
                                  class="fas fa-lock"
                                ></i>
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
};

export default AddCredits;
