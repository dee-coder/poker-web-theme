import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Row, Image, Tabs, Tab } from "react-bootstrap";
import API from "../../apiUrl.json";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
const SponsorsPage = (props) => {
  const [sponsorId, setSponsorsId] = useState(null);
  const [sponsorDetails, setSponsorsDetails] = useState({});
  const [key, setKey] = useState("running");
  useEffect(() => {
    const id = props.match.params.id;
    setSponsorsId(id);
    fetch(API.baseUrl + API.getSponsorDetails, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setSponsorsDetails(json.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box p={5}>
      <Row style={{ marginBottom: "40px" }}>
        <Col lg={12} style={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", color: "white" }}
          >
            Sponsors
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Paper style={{ padding: "30px" }}>
            <Row>
              <Col lg={12}>
                <div className="d-flex justify-content-center">
                  <Image
                    src={toAbsoluteUrl("/media/users/100_1.jpg")}
                    roundedCircle
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col lg={12} style={{ textAlign: "center" }}>
                <span className="text-dark-75 font-weight-bold text-size-lg">
                  {sponsorDetails.sponsor_name}
                </span>
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <Paper style={{ padding: "30px" }}>
                {" "}
                <span
                  className="text-dark-75 font-weight-bolder text-size-lg h4"
                  style={{ marginBottom: "30px" }}
                >
                  About Me
                </span>
                <br />
                <span
                  className="text-mute font-weight-normal text-size-md"
                  style={{ marginTop: "20px" }}
                >
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Curabitur aliquet quam id dui posuere blandit.
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Donec sollicitudin molestie malesuada. Vestibulum
                  ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Cras ultricies ligula sed magna dictum porta. Curabitur arcu
                  erat, accumsan id imperdiet et, porttitor at sem. Donec
                  sollicitudin molestie malesuada. Vivamus suscipit tortor eget
                  felis porttitor volutpat.
                </span>
              </Paper>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col lg={12}>
              <Paper style={{ padding: "30px" }}>
                <Row>
                  {" "}
                  <Col lg={12}>
                    <span
                      className="text-dark-75 font-weight-bolder text-size-lg h4"
                      style={{ marginBottom: "30px" }}
                    >
                      Tournament History
                    </span>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col lg={12}>
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(key) => setKey({ key })}
                    >
                      <Tab
                        eventKey="running"
                        title="Running Tournaments"
                        style={{ paddingTop: "30px" }}
                      >
                        <p> Tab</p>
                      </Tab>
                      <Tab
                        eventKey="completed"
                        title="Completed Tournaments"
                        style={{ paddingTop: "30px" }}
                      >
                        <p> Tab</p>
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  );
};

export default SponsorsPage;
