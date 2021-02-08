import { Box, Typography } from "@material-ui/core";
import { RowingRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import API from "../../../apiUrl.json";
import { Collapse } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { makeStyles } from "@material-ui/core/styles";

const DrawerSignup = ({network}) => {
  const [Tnc, setTnc] = useState(false);
  const [loading, setLoading] = useState();
  const [goAhead, setGoAhead] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    list: {
      width: 800,
    },
    viewBoxCont: {
      width: "auto",
    },
  }));

  const classes = useStyles();
  const handleSubmit = () => {};

  return (
    <div className={classes.list}>
      <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
        <Container>
          <Row>
            <Col>
              <Typography
                variant="h4"
                style={{
                  alignItems:"center",
                  justifyContent:"center",
                  fontWeight: "600",
                  color: "#000",
                }}>
                {network} SignUp Verification Process 
              </Typography>
            </Col>
          </Row>
          <Col>
            <Row>
              <Col lg={12}>
                <Typography
                  variant="body1"
                  style={{ marginTop: "30px", color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae.
                </Typography>
              </Col>
            </Row>
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={toAbsoluteUrl("/media/banners/contact-us.svg")}
                  style={{ width: "550px", height: "250px" }}
                />
              </div>
            </Col>
            <Col style={{ marginTop: "40px" }} lg={12}>
              <div className="form-group d-flex align-items-center justify-content-center">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    className="m-1"
                    checked={Tnc}
                    onChange={(e) => (Tnc ? setTnc(false) : setTnc(true))}
                  />
                  <Link
                    to="/terms"
                    target="_blank"
                    className="mr-1"
                    rel="noopener noreferrer">
                    I agree the SignUp & Verification Process
                  </Link>
                  <span />
                </label>
              </div>
              <div className="form-group d-flex flex-wrap flex-center">
                <button
                  type="submit"
                  style={{ minWidth: "100px" }}
                  variant="primary"
                  type="submit"
                  disabled={!goAhead ? true : false}
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">
                  <span>Accept And Continue</span>
                  {loading && (
                    <span className="ml-3 spinner spinner-white"></span>
                  )}
                </button>

                <Link to="">
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4">
                    Cancel
                  </button>
                </Link>
              </div>
            </Col>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default DrawerSignup;
