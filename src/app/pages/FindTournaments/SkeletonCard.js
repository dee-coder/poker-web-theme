import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box, Typography, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
  return (
    <section>
      <Box>
        <Row>
          <Col lg={12}>
            <Paper  style={{ padding: "20px" }}>
            
              <Skeleton width={`100%`} height={26} />
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`100%`} />
              </h4>
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`50%`} />
              </h4>
            </Paper>
          </Col>
        </Row>
        <Row style={{marginTop:"30px"}} >
          <Col lg={12}>
            <Paper  style={{ padding: "20px" }}>
              <Skeleton width={`100%`} height={26} />
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`100%`} />
              </h4>
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`50%`} />
              </h4>
            </Paper>
          </Col>
        </Row>
        <Row style={{marginTop:"30px"}} >
          <Col lg={12}>
            <Paper  style={{ padding: "20px" }}>
              <Skeleton width={`100%`} height={26} />
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`100%`} />
              </h4>
              <h4 style={{ marginTop: "30px"}} className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} /> */}
                <Skeleton height={36} width={`50%`} />
              </h4>
            </Paper>
          </Col>
        </Row>
        <Row >
          {/* <Col lg={12}>
            <Row style={{ marginTop: "30px"}}>
              <Col lg={4}>
                <Paper style={{ padding: "60px" }}>
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                </Paper>
              </Col>
              <Col lg={4}>
                <Paper style={{ padding: "60px" }}>
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                </Paper>
              </Col>
              <Col lg={4}>
                <Paper style={{ padding: "30px" }}>
                  <Col>
                    <div>
                      <Skeleton circle={true} height={50} width={50} />
                      <Skeleton padding={20} height={36} width={`80%`} />
                    </div>
                    <div>
                      <Skeleton circle={true} height={50} width={50} />

                      <Skeleton height={36} width={`80%`} />
                    </div>
                    <div>
                      <Skeleton circle={true} height={50} width={50} />
                      <Skeleton height={36} width={`80%`} />
                    </div>
                    <div>
                      <Skeleton circle={true} height={50} width={50} />
                      <Skeleton height={36} width={`80%`} />
                    </div>
                  </Col>
                </Paper>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </Box>
    </section>
  );
};
export default SkeletonCard;
