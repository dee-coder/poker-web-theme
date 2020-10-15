import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Row, Col, Container, Badge, Form } from "react-bootstrap";
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
const DrawerTournamentsView = ({ setViewTournamentMode, obj }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <div className={classes.viewBoxCont} style={{ padding: "20px" }}>
        <Container>
          <Row>
            <Col>
              <Form inline>
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
              </Form>
            </Col>
            <Col>
              <Badge
                variant="secondary"
                style={{ float: "right" }}
                onClick={() => setViewTournamentMode(false)}
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

export default DrawerTournamentsView;
