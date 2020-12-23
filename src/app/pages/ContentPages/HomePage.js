import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

const HomePage = () => {
  const backgroundImageUrl = toAbsoluteUrl("/media/stock-600x600/img-16.jpg");

  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div
            className={`card card-custom bgi-no-repeat bgi-size-cover`}
            style={{
              backgroundImage: `url("${backgroundImageUrl}")`,
              height: "400px",
            }}
          >
            {/* begin::Body */}
            <div className="card-body row">
              <div className="col-lg-6">
                <div className="p-1 flex-grow-1">
                  <span
                    className="text-white font-weight-bolder line-height-lg mb-5"
                    style={{ fontSize: "30px" }}
                  >
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus.
                  </span>
                </div>

                <div className="p-1 flex-grow-1" style={{ marginTop: "15px" }}>
                  <span style={{ fontSize: "14px", color: "white" }}>
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Proin eget tortor risus.
                  </span>
                </div>

                <div className="p-1 flex-grow-1" style={{ marginTop: "15px" }}>
                  <Button
                    style={{ height: "50px", fontSize: "14px", width: "150px" }}
                    variant="primary"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="secondary"
                    style={{
                      height: "50px",
                      fontSize: "14px",
                      width: "150px",
                      marginLeft: "20px",
                    }}
                  >
                    Learn more
                  </Button>
                </div>

                <div
                  className="p-1 flex-grow-1"
                  style={{ marginTop: "15px", paddingLeft: "1px" }}
                >
                  <Link
                    to="/how-it-works"
                    className="btn btn-link btn-link-warning font-weight-bold"
                  >
                    How it works?
                    <span className="svg-icon-lg svg-icon-warning">
                      <SVG
                        style={{ color: "white" }}
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Navigation/Arrow-right.svg"
                        )}
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
            {/* end::Body */}
          </div>
        </Col>
      </Row>

      <Row
        style={{ marginTop: "30px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/888pokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/partypokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/888pokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/partypokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/888pokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image
            src={toAbsoluteUrl("/media/poker-logos/partypokerlogo.png")}
            style={{ height: "60px", width: "60px" }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card">
            <div className="card-body" style={{ padding: "0" }}>
              <Row>
                <Col lg={6} style={{ paddingRight: "0" }}>
                  <Image
                    height="100%"
                    width="100%"
                    src={toAbsoluteUrl("/media/banners/poker-banner.jpg")}
                    style={{
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                      borderTopLeftRadius: "3px",
                      borderBottomLeftRadius: "3px",
                    }}
                  />{" "}
                </Col>
                <Col lg={6} style={{ padding: "2.0rem" }}>
                  <div
                    className="d-flex flex-column justify-content-start"
                    style={{ marginBottom: "0px" }}
                  >
                    <Typography
                      variant="button"
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#17a2b8",
                      }}
                    >
                      Features
                    </Typography>
                    <Typography
                      variat="h4"
                      style={{ fontSize: "30px", fontWeight: "600" }}
                    >
                      For Players
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: "20px" }}>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Curabitur aliquet quam id dui posuere
                      blandit. Curabitur aliquet quam id dui posuere blandit.
                    </Typography>

                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.aliquet
                          quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>Curabitur aliquet quam id dui</strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit. posuere
                          blandit.Curabitur aliquet quam id dui posuere blandit.
                          posuere blandit.
                        </strong>
                      </Typography>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <Link to="#" target="_blank">
                        <div className="d-flex flex-row align-items-center">
                          <span>
                            {" "}
                            <i
                              style={{ fontSize: "20px", color: "#6993ff" }}
                              class="far fa-play-circle"
                            ></i>
                          </span>
                          <Typography
                            style={{ marginLeft: "20px" }}
                            variant="h6"
                          >
                            Watch the video
                          </Typography>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "40px" }}
                    >
                      <Button
                        style={{
                          height: "50px",
                          fontSize: "14px",
                          width: "150px",
                        }}
                        variant="primary"
                      >
                        Become a Player
                      </Button>
                      <Button
                        style={{
                          height: "50px",
                          marginLeft: "20px",
                          fontSize: "14px",
                          width: "150px",
                        }}
                        variant="outline-primary"
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card">
            <div className="card-body" style={{ padding: "0" }}>
              <Row>
                <Col
                  lg={6}
                  style={{
                    paddingTop: "50px",
                    paddingBottom: "0",
                    paddingRight: "50px",
                    paddingLeft: "50px",
                  }}
                >
                  <div
                    className="d-flex flex-column justify-content-start"
                    style={{ marginBottom: "0px", paddingBottom: "5px" }}
                  >
                    <Typography
                      variant="button"
                      style={{
                        fontWeight: "600",
                        fontSize: "15px",
                        color: "#17a2b8",
                      }}
                    >
                      Features
                    </Typography>
                    <Typography
                      variat="h4"
                      style={{ fontSize: "30px", fontWeight: "600" }}
                    >
                      For Sponsors
                    </Typography>

                    <Typography variant="body1" style={{ marginTop: "20px" }}>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Curabitur aliquet quam id dui posuere
                      blandit. Curabitur aliquet quam id dui posuere blandit.
                    </Typography>

                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.aliquet
                          quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit.
                        </strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>Curabitur aliquet quam id dui</strong>
                      </Typography>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <span>
                        <i
                          class="far fa-check-circle"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </span>
                      <Typography
                        variant="body1"
                        style={{ marginLeft: "20px" }}
                      >
                        <strong>
                          Curabitur aliquet quam id dui posuere blandit. posuere
                          blandit.Curabitur aliquet quam id dui posuere blandit.
                          posuere blandit.
                        </strong>
                      </Typography>
                    </div>

                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "20px" }}
                    >
                      <Link to="#" target="_blank">
                        <div className="d-flex flex-row align-items-center">
                          <span>
                            {" "}
                            <i
                              style={{ fontSize: "20px", color: "#6993ff" }}
                              class="far fa-play-circle"
                            ></i>
                          </span>
                          <Typography
                            style={{ marginLeft: "20px" }}
                            variant="h6"
                          >
                            Watch the video
                          </Typography>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "40px" }}
                    >
                      <Button
                        style={{
                          height: "50px",
                          fontSize: "14px",
                          width: "200px",
                        }}
                        variant="primary"
                      >
                        Become a Sponsor
                      </Button>
                      <Button
                        style={{
                          height: "50px",
                          fontSize: "14px",
                          width: "200px",
                          marginLeft: "20px",
                        }}
                        variant="outline-primary"
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg={6} style={{ paddingLeft: "0" }}>
                  <Image
                    height="100%"
                    width="100%"
                    src={toAbsoluteUrl("/media/banners/poker-banner1.jpg")}
                    style={{
                      borderTopRightRadius: "3px",
                      borderBottomRightRadius: "3px",
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col lg={12}>
          <Row>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                <Typography
                  variant="button"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#17a2b8",
                  }}
                >
                  How it works
                </Typography>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "5px" }}>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                <div
                  style={{
                    height: "2px",
                    width: "80px",
                    border: "1px solid #000",
                    marginTop: "5px",
                    borderRadius: ".2rem",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col lg={4}>
          <div className="card" style={{ borderRadius: "12px" }}>
            <div className="card-body">
              {" "}
              <div className="symbol symbol-45 symbol-light-success mr-5">
                <span className="symbol-label">
                  <span className="svg-icon svg-icon-success">
                    <SVG
                      className="h-50 align-self-center"
                      src={toAbsoluteUrl("/media/svg/icons/Code/Option.svg")}
                    ></SVG>
                  </span>
                </span>
              </div>
              <Typography
                style={{ marginTop: "20px", fontWeight: "600" }}
                variant="h5"
              >
                Sed porttitor
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia
                in, elementum id enim. Sed porttitor lectus nibh. Curabitur
                aliquet quam id dui posuere blandit. Curabitur aliquet quam id
                dui posuere blandit.
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card" style={{ borderRadius: "12px" }}>
            <div className="card-body">
              {" "}
              <div className="symbol symbol-45 symbol-light-success mr-5">
                <span className="symbol-label">
                  <span className="svg-icon svg-icon-success">
                    <SVG
                      className="h-50 align-self-center"
                      src={toAbsoluteUrl("/media/svg/icons/Code/Option.svg")}
                    ></SVG>
                  </span>
                </span>
              </div>
              <Typography
                style={{ marginTop: "20px", fontWeight: "600" }}
                variant="h5"
              >
                Sed porttitor
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia
                in, elementum id enim. Sed porttitor lectus nibh. Curabitur
                aliquet quam id dui posuere blandit. Curabitur aliquet quam id
                dui posuere blandit.
              </Typography>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="card" style={{ borderRadius: "12px" }}>
            <div className="card-body">
              {" "}
              <div className="symbol symbol-45 symbol-light-success mr-5">
                <span className="symbol-label">
                  <span className="svg-icon svg-icon-success">
                    <SVG
                      className="h-50 align-self-center"
                      src={toAbsoluteUrl("/media/svg/icons/Code/Option.svg")}
                    ></SVG>
                  </span>
                </span>
              </div>
              <Typography
                style={{ marginTop: "20px", fontWeight: "600" }}
                variant="h5"
              >
                Sed porttitor
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia
                in, elementum id enim. Sed porttitor lectus nibh. Curabitur
                aliquet quam id dui posuere blandit. Curabitur aliquet quam id
                dui posuere blandit.
              </Typography>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              variant="success"
              style={{ height: "50px", fontSize: "14px", width: "150px" }}
            >
              Learn more{" "}
              <i
                style={{ marginLeft: "10px" }}
                class="fas fa-external-link-alt"
              ></i>
            </Button>
            <Button
              variant="outline-success"
              style={{
                height: "50px",
                fontSize: "14px",
                width: "150px",
                marginLeft: "20px",
              }}
            >
              Get Started
            </Button>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col lg={12}>
          <Row>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                <Typography
                  variant="button"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#17a2b8",
                  }}
                >
                  Networks with we work
                </Typography>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "5px" }}>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                <div
                  style={{
                    height: "2px",
                    width: "80px",
                    border: "1px solid #000",
                    marginTop: "5px",
                    borderRadius: ".2rem",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={4}>
          <Link
            style={{ color: "inherit" }}
            to="/networks/bodog"
            target="_blank"
          >
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/bodogpoker.png")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  Bodog
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={4}>
          <Link
            style={{ color: "inherit" }}
            to="/networks/partypoker"
            target="_blank"
          >
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/partypoker.jpg")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  PartyPoker
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={4}>
          <Link
            style={{ color: "inherit" }}
            to="/networks/skypoker"
            target="_blank"
          >
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/skypoker.jpg")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  SkyPoker
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col lg={4}>
          <Link
            style={{ color: "inherit" }}
            to="/networks/pokerstars"
            target="_blank"
          >
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/pokerstars.jpg")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  PokerStars
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={4}>
          <Link style={{ color: "inherit" }} to="/networks/888poker">
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/888poker.jpg")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  888Poker
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={4}>
          <Link
            style={{ color: "inherit" }}
            to="/networks/fulltilt"
            target="_blank"
          >
            <div className="card" style={{ borderRadius: "12px" }}>
              <img
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                src={toAbsoluteUrl("/media/networks/fulltilt.jpg")}
              />

              <div className="card-body">
                {" "}
                <Typography
                  style={{ marginTop: "20px", fontWeight: "600" }}
                  variant="h5"
                >
                  FullTilt
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "20px",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Sed porttitor lectus nibh.
                  Curabitur aliquet quam id dui posuere blandit. Curabitur
                  aliquet quam id dui posuere blandit.
                </Typography>
              </div>
            </div>
          </Link>
        </Col>
      </Row>

      {/* <Row style={{ marginTop: "50px" }}>
        <Col lg={12}>
          <Row>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "5px" }}>
            <Col lg={12}>
              <div className="d-flex flex-row justify-content-center">
                <div
                  style={{
                    height: "2px",
                    width: "80px",
                    border: "1px solid #000",
                    marginTop: "5px",
                    borderRadius: ".2rem",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <Row style={{ marginTop: "30px" }}>
        <Col lg={12}>
          <div className="card" style={{ borderRadius: "12px" }}>
            <div className="card-body">
              <Row>
                <Col
                  lg={6}
                  sm={12}
                  md={12}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Image
                    src={toAbsoluteUrl("/media/banners/mailbox.svg")}
                    style={{
                      width: "70%",
                      height: "90%",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col
                  lg={6}
                  sm={12}
                  md={12}
                  style={{ paddingTop: "30px", paddingBottom: "30px" }}
                >
                  <Typography
                    variant="button"
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#17a2b8",
                    }}
                  >
                    GET IN TOUCH
                  </Typography>
                  <Typography
                    variant="h3"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginTop: "20px",
                    }}
                  >
                    Join The Pool Party!
                  </Typography>

                  <Typography style={{ marginTop: "20px" }} variant="h6">
                    Proin eget tortor risus. Quisque velit nisi, pretium ut
                    lacinia in, elementum id enim.
                  </Typography>
                  <Typography variant="h6">
                    lacinia in, elementum id enim.
                  </Typography>

                  <InputGroup
                    className="mb-3"
                    style={{ marginTop: "30px", width: "70%", height: "50px" }}
                  >
                    <FormControl
                      placeholder="Email"
                      aria-label="Recipient's Email"
                      aria-describedby="basic-addon2"
                      style={{ height: "50px" }}
                    />
                    <InputGroup.Append>
                      <Button variant="success">Join</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default HomePage;
