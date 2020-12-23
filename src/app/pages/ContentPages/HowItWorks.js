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
          <div className="card">
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
    </Box>
  );
};

export default HowItWorks;
