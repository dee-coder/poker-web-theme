import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Row, Col, Container, Badge, Form } from "react-bootstrap";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import {
  MixedWidget1,
  MixedWidget10,
  MixedWidget11,
  MixedWidget12,
  MixedWidget14,
  MixedWidget6,
} from "../../_metronic/_partials/widgets";
import { MixedWidgetCustom } from "./mixWidgetComponent";
import { TournamentHeader } from "./tournamentHeaderComponent";

const Completionist = () => <span>This tournament has been finished.</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {days}
        {" day(s) "}
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  list: {
    width: 750,
  },
  viewBoxCont: {
    width: "auto",
  },
}));
const ViewTournamentDrawer = ({ setViewTournamentDetails, obj }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
        <Container>
          <Row>
            <Col lg={8}>
              <Link to={`/details/${obj.sharkscope_id}`}>
                <span className="text-success">
                  <i
                    class="fas fa-external-link-alt"
                    style={{
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  ></i>{" "}
                  Open details in new tab
                </span>
              </Link>
              {/* <Form inline>
                <h4>
                  {" "}
                  <Badge
                    variant="success"
                    style={{ fontSize: "12px", fontWeight: "200" }}
                  >
                    #{obj.sharkscope_id}
                  </Badge>
                </h4>

                <h4 style={{ marginLeft: "10px" }}>
                  {" "}
                  <Badge
                    variant="secondary"
                    style={{ fontSize: "12px", fontWeight: "200" }}
                  >
                    {obj.scheduledStartTime}
                  </Badge>
                </h4>

                <Badge
                  variant="danger"
                  style={{
                    marginLeft: "10px",
                    color: "#FFF",
                    fontWeight: "200",
                  }}
                >
                  <i
                    class="far fa-clock"
                    style={{
                      color: "#fff",
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  ></i>
                  <Countdown
                    date={new Date(obj.scheduledStartTime)}
                    renderer={renderer}
                  />
                </Badge>
              </Form> */}
            </Col>
            <Col lg={4}>
              <Badge
                variant="secondary"
                style={{ float: "right" }}
                onClick={() => setViewTournamentDetails(false)}
              >
                {" "}
                <i
                  style={{ float: "right", fontSize: "14px" }}
                  class="fas fa-times"
                ></i>
              </Badge>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <TournamentHeader className="card-stretch gutter-b" obj={obj} />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <MixedWidgetCustom className="card-stretch gutter-b" obj={obj} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ViewTournamentDrawer;
