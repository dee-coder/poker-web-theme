import { Box, Paper, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import API from "../../../apiUrl.json";
const WalletAndTransactionPage = () => {
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
  const tabs = [
    { name: " Internal Transactions", key: "internal" },
    { name: " External Transactions", key: "external" },
  ];

  const [SelectedTab, setSelectedTab] = useState("internal");
  const [WalletInfo, setWalletInfo] = useState({});

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-start">
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "white" }}
            >
              Wallet & Transactions
            </Typography>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <Row style={{ marginTop: "30px" }}>
            <Col lg={12}>
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
                          Wallet
                        </Typography>

                        <Button variant="primary" style={{ float: "right" }}>
                          Add Credits to Wallet +
                        </Button>
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
                            <br />
                            <Typography
                              variant="body1"
                              style={{ color: "gray" }}
                            >
                              Sponsor Credits
                            </Typography>
                          </div>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "20px",
                            marginRight: "20px",
                          }}
                        >
                          <Typography variant="button">Total Spent</Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{
                              fontWeight: "800",
                              marginTop: "10px",
                              color: "black",
                            }}
                          >
                            0.00
                          </Typography>
                          <br />
                          <Typography variant="body1" style={{ color: "gray" }}>
                            Total Spent
                          </Typography>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "20px",
                          }}
                        >
                          <Typography variant="button">
                            Total of Winning
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{
                              fontWeight: "800",
                              marginTop: "10px",
                              color: "#28A745",
                            }}
                          >
                            0.00
                          </Typography>
                          <br />
                          <Typography variant="body1" style={{ color: "gray" }}>
                            Total of Winning
                          </Typography>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "30px",
                          }}
                        >
                          <Typography variant="button">
                            Total of Loss
                          </Typography>
                          <br />
                          <Typography
                            variant="h4"
                            style={{
                              fontWeight: "800",
                              marginTop: "10px",
                              color: "#DC3545",
                            }}
                          >
                            0.00
                          </Typography>
                          <br />
                          <Typography variant="body1" style={{ color: "gray" }}>
                            Total of Loss
                          </Typography>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Paper>

              {/* <div className="col">
                      <Typography variant="button">Total Games</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        56
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button">Total Profit</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: "800",
                          marginTop: "10px",
                          color: "#28A745",
                        }}
                      >
                        + $342.02
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button">Total Loss</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: "800",
                          marginTop: "10px",
                          color: "#DC3545",
                        }}
                      >
                        - $22.56
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="row align-items-center"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="col">
                      <Typography variant="button">Winning Ratio</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        78%
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button"> Connections</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        20 +
                      </Typography>
                    </div>
                    <div className="col">
                      <Typography variant="button"> Active Time</Typography>
                      <br />
                      <Typography
                        variant="h4"
                        style={{ fontWeight: "800", marginTop: "10px" }}
                      >
                        98%
                      </Typography>
                    </div> */}
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col lg={12}>
              <Paper style={{ padding: "30px" }}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col lg={12}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "600", color: "black" }}
                    >
                      Transactions
                    </Typography>
                    <Typography variant="body2" style={{ color: "gray" }}>
                      All transactions regarding withdrawel and sponsorships
                    </Typography>
                  </Col>
                </Row>
                <Row>
                  <div className="col-auto">
                    <span
                      className={
                        SelectedTab === "internal"
                          ? "tabs-active"
                          : "tabs-not-active"
                      }
                      onClick={() => setSelectedTab("internal")}
                    >
                      {tabs[0].name}
                    </span>
                  </div>
                  <div className="col-auto" style={{ marginLeft: "10px" }}>
                    <span
                      className={
                        SelectedTab === "external"
                          ? "tabs-active"
                          : "tabs-not-active"
                      }
                      onClick={() => setSelectedTab("external")}
                    >
                      {tabs[1].name}
                    </span>
                  </div>
                </Row>
                <Row style={{ marginTop: "8px" }}>
                  <Col
                    lg={12}
                    style={{ borderBottom: "1px solid #e0e0e0" }}
                  ></Col>
                </Row>

                {SelectedTab === "internal" && (
                  <Row>
                    <Col
                      lg={12}
                      style={{ paddingTop: "100px", paddingBottom: "100px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={toAbsoluteUrl("/media/svg/empty.svg")}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "20px",
                          }}
                        />
                        <Typography variant="h6" style={{ color: "#c4c4c4" }}>
                          No internal transactions yet.
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                )}

                {SelectedTab === "external" && (
                  <Row>
                    <Col
                      lg={12}
                      style={{ paddingTop: "100px", paddingBottom: "100px" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <Image
                          src={toAbsoluteUrl("/media/svg/empty.svg")}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "20px",
                          }}
                        />
                        <Typography variant="h6" style={{ color: "#c4c4c4" }}>
                          No external transactions yet.
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                )}
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
};

export default WalletAndTransactionPage;
