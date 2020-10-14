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
import { Avatar, makeStyles } from "@material-ui/core";
import { ListsWidget10 } from "../../_metronic/_partials/widgets";

export function ProfileBoxPlayer({ className, stat }) {
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
  console.log(stat);
  const classes = useStyles();
  //   var one = stat[0];
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
        {/* <Row>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {one["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {one["$"]}
            </span>
          </Col>
          <Col lg={6}>
            <span className="text-dark font-weight-bolder text-hover-primary font-size-h4">
              {two["@id"]}
            </span>
            <br />
            <span className="text-muted font-weight-bolder text-hover-primary font-size-h6">
              {two["$"]}
            </span>
          </Col>
        </Row>
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
