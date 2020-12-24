import { Box, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";
import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

const HowItWorks = () => {
  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <Row>
                <Col lg={6}>
                  <div
                    className="d-flex flex-column justify-content-start"
                    style={{ paddingLeft: "20px" }}
                  >
                    <Typography
                      variant="h1"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "40px",
                        marginTop: "20px",
                      }}
                    >
                      How it works?
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ marginTop: "30px", color: "black" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae.
                    </Typography>
                    <div style={{ marginTop: "30px" }}>
                      <Button
                        variant="success"
                        style={{
                          height: "50px",
                          fontSize: "14px",
                          width: "150px",
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        variant="outline-success"
                        style={{
                          marginLeft: "20px",
                          height: "50px",
                          fontSize: "14px",
                          width: "150px",
                        }}
                      >
                        Get it touch
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex align-items-center justify-content-center">
                    <Image
                      src={toAbsoluteUrl("/media/banners/how-it-works.svg")}
                      style={{ width: "350px", height: "250px" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div
            className="d-flex align-items-center justify-content-start"
            style={{ padding: "10px" }}
          >
            <Typography
              variant="button"
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#17a2b8",
              }}
            >
              STEPS
            </Typography>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col lg={3}>
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card shadow d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                background: "#17a2b8",
                zIndex: "1000",
                marginLeft: "20px",
              }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: "900", color: "white" }}
              >
                1
              </span>
            </div>
            <div
              className="card"
              style={{
                height: "300px",
                width: "100%",
                marginTop: "-25px",
                borderRadius: "12px",
                background: "#fff",
                zIndex: "100",
                padding: "30px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Vestibulum ante
              </Typography>

              <Typography variant="body1" style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae. Primis in faucibus orci luctus et
                ultrices posuere cubilia Curae.
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card shadow d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                background: "#17a2b8",
                zIndex: "1000",
                marginLeft: "20px",
              }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: "900", color: "white" }}
              >
                2
              </span>
            </div>
            <div
              className="card"
              style={{
                height: "300px",
                width: "100%",
                marginTop: "-25px",
                borderRadius: "12px",
                background: "#fff",
                zIndex: "100",
                padding: "30px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Vestibulum ante
              </Typography>
              <Typography variant="body1" style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae. Primis in faucibus orci luctus et
                ultrices posuere cubilia Curae.
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card shadow d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                background: "#17a2b8",
                zIndex: "1000",
                marginLeft: "20px",
              }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: "900", color: "white" }}
              >
                3
              </span>
            </div>
            <div
              className="card"
              style={{
                height: "300px",
                width: "100%",
                marginTop: "-25px",
                borderRadius: "12px",
                background: "#fff",
                zIndex: "100",
                padding: "30px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Vestibulum ante
              </Typography>
              <Typography variant="body1" style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae. Primis in faucibus orci luctus et
                ultrices posuere cubilia Curae.
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card shadow d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                background: "#17a2b8",
                zIndex: "1000",
                marginLeft: "20px",
              }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: "900", color: "white" }}
              >
                4
              </span>
            </div>
            <div
              className="card"
              style={{
                height: "300px",
                width: "100%",
                marginTop: "-25px",
                borderRadius: "12px",
                background: "#fff",
                zIndex: "100",
                padding: "30px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Vestibulum ante
              </Typography>
              <Typography variant="body1" style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae. Primis in faucibus orci luctus et
                ultrices posuere cubilia Curae.
              </Typography>
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default HowItWorks;
