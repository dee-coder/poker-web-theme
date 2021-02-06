import { Badge, Box, Divider, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Form, Card } from "react-bootstrap";
import { MixedWidgetCustom } from "../mycomponents/mixWidgetComponent";
import { TournamentHeader } from "../mycomponents/tournamentHeaderComponent";
import API from "../../apiUrl.json";
import queryString from "query-string";
import { Link } from "react-router-dom";
import _ from "lodash";

const TournamentDetailsPage = (props) => {
  const [id, setId] = useState("");

  const [networks, setNetworks] = useState();
  const [dataa, setData] = useState([]);
  const [details, setDetails] = useState({});
  const [isLogged, setIsLogged] = useState();
  const [url, setUrl] = useState();
  const Json = {};
  useEffect(() => {
    var info = props.match.params;
    setId(info.id);
    fetch(API.baseUrl + API.getTournamentById + "?id=" + info.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        //setData(json.networks);
        setDetails(json.result);
        var data = _.find(json.networks, ["name", json.result.network]);
        //console.log(data);
        var url = "https://pokerswapping.com/networks/" + data.page_slug;
        setUrl(url);
      });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo === undefined || userInfo === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }

    //setNetworks(Json);
  }, []);

  if (id === "") {
    return (
      <div>
        <Typography variant="h1">Something went wrong</Typography>
      </div>
    );
  } else {
    return (
      <Box component="span" m={5}>
        <Row>
          <Col>
            <Typography
              variant="h4"
              style={{ fontWeight: "600", color: "#FFF" }}>
              Tournament Details
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col lg={9}>
            <TournamentHeader
              className="card-stretch gutter-b"
              obj={details}
              networks={dataa}
            />
          </Col>
          <Col lg={3}>
            {isLogged && (
              <Paper style={{ padding: "30px" }}>
                <Link to={`/add-swap/${details.sharkscope_id}`}>
                  <Button
                    variant="primary"
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "12px",
                    }}>
                    Poker Swapping{" "}
                    <i
                      class="fas fa-exchange-alt"
                      style={{
                        color: "#FFF",
                        marginLeft: "15px",

                        fontSize: "13px",
                        float: "right",
                        marginRight: "15px",
                      }}></i>
                  </Button>
                </Link>
                <br />
                <Link to={`/sponsorship/create/${details.sharkscope_id}`}>
                  <Button
                    variant="primary"
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "12px",
                    }}>
                    Add sponsors{" "}
                    <i
                      class="fas fa-plus"
                      style={{
                        color: "#FFF",
                        marginLeft: "15px",
                        fontSize: "13px",
                        float: "right",
                        marginRight: "15px",
                      }}></i>
                  </Button>
                </Link>
                <br />
                <Button
                  variant="primary"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "12px",
                  }}>
                  View Live{" "}
                  <i
                    class="fas fa-tv"
                    style={{
                      color: "#FFF",
                      marginLeft: "15px",
                      fontSize: "13px",
                      float: "right",
                      marginRight: "15px",
                    }}></i>
                </Button>
                <a href={url} target="_blank">
                  <Button
                    variant="primary"
                    style={{
                      marginTop: "20px",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "12px",
                    }}>
                    {details.network}{" "}
                    <i
                      class="fas fa-external-link-alt"
                      style={{
                        color: "#FFF",
                        marginLeft: "15px",
                        fontSize: "13px",
                        float: "right",
                        marginRight: "15px",
                      }}></i>
                  </Button>
                </a>
                <Button
                  variant="primary"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "12px",
                  }}>
                  Add to calender{" "}
                  <i
                    class="fas fa-calendar-check"
                    style={{
                      color: "#FFF",
                      marginLeft: "15px",
                      fontSize: "13px",
                      float: "right",
                      marginRight: "15px",
                    }}></i>
                </Button>
                <Button
                  variant="primary"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "12px",
                  }}>
                  Share Tournament{" "}
                  <i
                    class="fas fa-share"
                    style={{
                      color: "#FFF",
                      marginLeft: "15px",
                      fontSize: "13px",
                      float: "right",
                      marginRight: "15px",
                    }}></i>
                </Button>
              </Paper>
            )}
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
    );
  }
};

export default TournamentDetailsPage;
