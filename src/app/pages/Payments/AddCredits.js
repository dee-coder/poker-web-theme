import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

function AddCredits() {
    return (
        <Row>
        <Col lg={12}>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <Row>
                <Col lg={6}>
                  <div
                    className="d-flex flex-column justify-content-start"
                    style={{ paddingLeft: "20px" }}>
                    <Typography
                      variant="h1"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "40px",
                        marginTop: "20px",
                      }}>
                      Add Credits To your wallet
                    </Typography>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="d-flex align-items-center justify-content-center">
                    <Image
                      src={toAbsoluteUrl("/media/banners/contact-us.svg")}
                      style={{ width: "350px", height: "250px" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    )
}

export default AddCredits
