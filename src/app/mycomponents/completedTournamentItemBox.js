import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Card, Badge, Row, Col, Button, Form } from "react-bootstrap";
import MailIcon from "@material-ui/icons/Mail";

const CompletedTournamentBoxItem = ({ obj }) => {
  const classes = useStyles();

  function getHumanDate(date) {
    var theDate = new Date(date * 1000);
    var dateString = theDate.toGMTString();
    return dateString;
  }

  return (
    <div className={classes.root} style={{ marginTop: "25px" }}>
      <Paper className={classes.paper}>
        {" "}
        <div className="bg-light-primay rounded " style={{ padding: "20px" }}>
          <Row>
            <Col lg={6}>
              <Badge variant="success">#{obj["@id"]}</Badge>
            </Col>
            <Col lg={6}>
              <Badge
                variant="primary"
                style={{ textAlign: "right", float: "right" }}
              >
                <i
                  class="far fa-clock"
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    marginRight: "5px",
                  }}
                ></i>
                {getHumanDate(obj["@date"])}
              </Badge>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <a className="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1">
                {obj["@name"]}
              </a>
              <br />
              <span className="text-muted font-weight-bold">{obj.network}</span>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col>
              <label>
                CURRENCY{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj["@currency"]}
              </span>
            </Col>
            <Col>
              <label>
                POSITION{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj.TournamentEntry["@position"]}
              </span>
            </Col>
            <Col>
              <label>
                RAKE{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj["@rake"]}
              </span>
            </Col>
            <Col>
              <label>
                STAKE{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj["@stake"]}
              </span>
            </Col>
            <Col>
              <label>
                STATE{" "}
                <i
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginLeft: "5px",
                  }}
                  class="fas fa-info-circle"
                ></i>
              </label>
              <br />
              <span className="text-muted font-weight-bold">
                {obj["@state"]}
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: "25px" }}>
            <Col lg={12}>
              <Form inline style={{ float: "left" }}>
                <Button variant="primary">
                  {obj["@network"]}{" "}
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-external-link-alt"
                  ></i>
                </Button>
                <Button style={{ marginLeft: "20px" }} variant="primary">
                  View More
                </Button>
                <Button variant={"secondary"} style={{ marginLeft: "25px" }}>
                  Share
                  <i
                    style={{ fontSize: "12px", marginLeft: "5px" }}
                    class="fas fa-calendar-check"
                  ></i>
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Paper>
    </div>
  );
};

export default CompletedTournamentBoxItem;
