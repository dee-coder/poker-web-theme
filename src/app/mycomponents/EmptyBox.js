import { Typography } from "@material-ui/core";
import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

const EmptyBox = ({ Content }) => {
  return (
    <Row>
      <Col lg={12} style={{ paddingTop: "100px", paddingBottom: "100px" }}>
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
            {Content}
          </Typography>
        </div>
      </Col>
    </Row>
  );
};

export default EmptyBox;
