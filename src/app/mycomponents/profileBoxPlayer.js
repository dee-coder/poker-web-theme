/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo } from "react";
import { Card, Dropdown, Row, Col } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import SVG from "react-inlinesvg";

import {
  DropdownCustomToggler,
  DropdownMenu2,
} from "../../_metronic/_partials/dropdowns";
import { useHtmlClassService } from "../../_metronic/layout";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Avatar, Divider, makeStyles } from "@material-ui/core";
import { ListsWidget10 } from "../../_metronic/_partials/widgets";

export function ProfileBoxPlayer({ className, statistics }) {
  const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 0,
      width: 100,
      height: 100,
    },
  });
  console.log(statistics);
  const classes = useStyles();
  //   var row1 = statistics[0];
  //   var row2 = statistics[1];
  //   var two = stat[1];
  //   var three = stat[2];
  //   var four = stat[3];
  //   var five = stat[4];
  //   var six = stat[5];

  return (
    <Card className={className}>
      {/* begin::Body */}
      <Card.Body>
        <Row>
          <Col lg={8}>
            <Avatar
              alt="Remy Sharp"
              src={toAbsoluteUrl("/media/poker-logos/placeholder-profile.jpg")}
              className={classes.bigAvatar}
            />
          </Col>
          <Col lg={4}>
            <span className="symbol-label bg-light-light">
              <SVG
                style={{ height: "30px", width: "30px" }}
                src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                className="h-60 align-self-right"
              ></SVG>{" "}
            </span>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col>
            <a
              href="#"
              className="text-dark font-weight-bolder text-hover-primary font-size-h2"
            >
              Deepak Suthar
            </a>
            <br />
            <p className="text-muted font-weight-bolder text-hover-primary font-size-h5">
              dpk05
            </p>
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginTop: "20px" }}>
          <Col lg={6}>
            {statistics.slice(0, 4).map((row) => {
              return (
                <Row style={{ margin: "10px" }}>
                  <Col lg={12}>
                    <span className="text-dark font-weight-bolder text-hover-primary font-size-h6">
                      {row["@id"]}
                    </span>
                    <br />
                    <span className="text-muted font-weight-bolder text-hover-primary ">
                      {row["$"]}
                    </span>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col lg={6}>
            {statistics.slice(4, 8).map((row) => {
              return (
                <Row style={{ margin: "10px" }}>
                  <Col lg={12}>
                    <span className="text-dark font-weight-bolder text-hover-primary font-size-h6">
                      {row["@id"]}
                    </span>
                    <br />
                    <span className="text-muted font-weight-bolder text-hover-primary ">
                      {row["$"]}
                    </span>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>

        {/*
        <Row>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {three["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {three["$"]}
            </span>
          </Col>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {four["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {four["$"]}
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {five["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {five["$"]}
            </span>
          </Col>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {six["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {six["$"]}
            </span>
          </Col>
        </Row> */}
      </Card.Body>
    </Card>
  );
}
