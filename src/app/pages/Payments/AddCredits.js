import { Box, Paper, Typography } from "@material-ui/core";
import { Link, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import API from "../../../apiUrl.json";
const AddCredits = () => {
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

  const selectCredits = () => {};
  var currencies = [
    "CAD",
    "HKD",
    "ISK",
    "PHP",
    "DKK",
    "HUF",
    "CZK",
    "GBP",
    "RON",
    "SEK",
    "IDR",
    "INR",
   " BRL",
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
   " PLN",
  ];
  const getCurrency=() => {
    var url = "https://api.exchangeratesapi.io/latest?base=USD";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((json) => json.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const tabs = [
    { name: " Internal Transactions", key: "internal" },
    { name: " External Transactions", key: "external" },
  ];

  const [SelectedTab, setSelectedTab] = useState("internal");
  const [WalletInfo, setWalletInfo] = useState({});
  const [credits, setCredits] = useState();
  const [validCredit, setValidCredit] = useState();
  const [currency, setCurrency] = useState();

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-start">
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "white" }}>
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
                  }}>
                  <Row style={{ marginBottom: "20px" }}>
                    <Col lg={12}>
                      <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "600",
                            color: "black",
                            float: "left",
                          }}>
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
                            }}>
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
                              }}>
                              {parseFloat(WalletInfo.sponsor_credits).toFixed(
                                2
                              )}
                            </Typography>
                            <br />
                            <Typography
                              variant="body1"
                              style={{ color: "gray" }}>
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
                            }}>
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
                              }}>
                              {parseFloat(WalletInfo.payment_credits).toFixed(
                                2
                              )}
                            </Typography>
                            <br />
                            <Typography
                              variant="body1"
                              style={{ color: "gray" }}>
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
                  }}>
                  <Row style={{ marginBottom: "20px" }}>
                    <Col lg={4}>
                      <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                        <Typography
                          variant="h6"
                          style={{
                            fontWeight: "600",
                            color: "black",
                            float: "left",
                          }}>
                          Choose An Amount
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Button style={{ margin: "10px" }}>100</Button>
                    <Button style={{ margin: "10px" }}>500</Button>
                    <Button style={{ margin: "10px" }}>1000</Button>
                    <Button style={{ margin: "10px" }}>2000</Button>
                    <Button style={{ margin: "10px" }}>10000</Button> */}

                    <Col style={{ padding: "0" }}>
                      <div className="form-group fv-plugins-icon-container">
                        <select
                          onChange={(e) => {
                            setCredits(e.target.value);
                            setValidCredit(
                              e.target.value === "Select Credits" ? false : true
                            );
                          }}
                          className={`form-control form-control-solid h-auto py-5 px-6 `}>
                          <option value={null}>Select Credits</option>
                          <option value="15">$ 15</option>
                          <option value="25">$ 25</option>
                          <option value="50">$ 50</option>
                          <option value="100">$ 100</option>
                        </select>
                      </div>

                      <Row style={{ marginBottom: "5px" }}>
                        <Col>
                          <div
                            style={{ paddingBottom: "5px", paddingTop: "5px" }}>
                            <Typography
                              variant="h6"
                              style={{
                                marginLeft: "10px",
                                fontWeight: "600",
                                color: "black",
                                float: "left",
                              }}>
                              Your Credits Will Expiry On
                            </Typography>
                          </div>
                          <div style={{ padding: "15px", margin: "20px" }}>
                            <p>12/12/2021</p>
                          </div>
                        </Col>
                      </Row>

                      {validCredit && (
                        <Row style={{ marginBottom: "20px" }}>
                          <Col>
                            <Typography
                              variant="h6"
                              style={{
                                marginLeft: "10px",
                                fontWeight: "600",
                                color: "black",
                                float: "left",
                              }}>
                              Select Your Desire Currency
                            </Typography>

                            <div className="form-group fv-plugins-icon-container">
                              <select
                                onChange={(e) => {
                                  setCurrency(
                                    e.target.value === "Select Your Currency"
                                      ? false
                                      : e.target.value
                                  );
                                }}
                                className={`form-control form-control-solid h-auto py-5 px-6 `}>
                                <option value={null}>
                                  Select Your Currency
                                </option>
                                {currencies.map((cur)=>{ 

                                return <option value={cur}>{cur}</option>
                              })}

                              </select>
                            </div>

                            <div
                              style={{
                                paddingBottom: "5px",
                                paddingTop: "5px",
                              }}>
                              <Typography
                                variant="h6"
                                style={{
                                  marginLeft: "10px",
                                  fontWeight: "600",
                                  color: "black",
                                  float: "left",
                                }}>
                                Your Account Will be Charged
                              </Typography>
                            </div>
                            <div style={{ padding: "15px", margin: "20px" }}>
                              <p>
                                {" "}
                                Your selected credits: &emsp;{" "}
                                {!currency ? "USD" : currency} &nbsp; {credits}
                              </p>
                              <p>
                                {" "}
                                Include GST: &emsp;{" "}
                                {!currency ? "USD" : currency} &nbsp; {credits}
                              </p>
                              <p>
                                {" "}
                                Include Tax Charge: &emsp;{" "}
                                {!currency ? "USD" : currency} &nbsp; {credits}
                              </p>
                              <br />
                              <p>
                                {" "}
                                Your Total Chargeble amount is: &emsp;{" "}
                                {!currency ? "USD" : currency} &nbsp;
                                {credits}{" "}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      )}
                    </Col>
                  </Row>
                  <Col>
                    <Button
                    onClick={()=>getCurrency()}
                     variant="danger">Continue</Button>
                  </Col>
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
