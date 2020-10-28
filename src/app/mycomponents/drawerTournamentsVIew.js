import { Box, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Row, Col, Container, Badge, Form, Button } from "react-bootstrap";
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
    width: 1100,
  },
  viewBoxCont: {
    width: "auto",
  },
}));
const DrawerTournamentsView = ({ setViewTournamentMode, obj, networks }) => {
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
              <Row>
                <Col lg={11}>
                  <a
                    href={`https://pokerswapping.com/details/${obj.sharkscope_id}`}
                    target="_blank"
                    style={{ float: "right" }}
                  >
                    {" "}
                    <Badge
                      variant="secondary"
                      style={{ fontSize: "12px", fontWeight: "200" }}
                    >
                      <i
                        class="fas fa-external-link-alt"
                        style={{ marginRight: "10px", fontSize: "12px" }}
                      />
                      Open in new page
                    </Badge>
                  </a>
                </Col>
                <Col lg={1}>
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
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              {/* <TournamentHeader className="card-stretch gutter-b" obj={obj} /> */}
              <Box component="span" m={5}>
                <Row style={{ marginTop: "30px" }}>
                  <Col lg={9}>
                    <TournamentHeader
                      className="card-stretch gutter-b"
                      obj={obj}
                      networks={networks}
                    />
                  </Col>

                  <Col lg={3}>
                    <Paper style={{ padding: "30px" }}>
                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        Poker Swapping{" "}
                        <i
                          class="fas fa-exchange-alt"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",

                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>
                      <br />
                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        Add sponsors{" "}
                        <i
                          class="fas fa-plus"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",
                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>
                      <br />
                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        View Live{" "}
                        <i
                          class="fas fa-tv"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",
                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>

                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        {obj.network}{" "}
                        <i
                          class="fas fa-external-link-alt"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",
                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>
                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        Add to calender{" "}
                        <i
                          class="fas fa-calendar-check"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",
                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>
                      <Button
                        variant="primary"
                        style={{
                          marginTop: "20px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        Share Tournament{" "}
                        <i
                          class="fas fa-share"
                          style={{
                            color: "#FFF",
                            marginLeft: "15px",
                            fontSize: "13px",
                            float: "right",
                            marginRight: "15px",
                          }}
                        ></i>
                      </Button>
                    </Paper>
                  </Col>
                </Row>
                <Row>
                  <Col lg={9}>
                    <Paper style={{ padding: "30px" }}>
                      <h4>Participants</h4>
                      <Divider style={{ marginTop: "15px" }} />
                    </Paper>
                  </Col>
                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DrawerTournamentsView;
