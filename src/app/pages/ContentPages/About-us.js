import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Box>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-center">
            <Typography
              variant="h4"
              style={{ color: "white", fontWeight: "600" }}
            >
              About Us
            </Typography>
          </div>
        </Col>
      </Row>
    </Box>
  );
};

export default AboutUsPage;
