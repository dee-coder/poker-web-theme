import { Paper } from "@material-ui/core";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BoxItem from "./tournamentBoxItem";

const MyActiveTournaments = ({ activeTournaments }) => {
  return (
    <Paper style={{ padding: "30px" }}>
      <Row>
        <Col>
          <span className="font-weight-bold font-dark h3">
            Active Tournaments
          </span>
        </Col>
      </Row>
      {activeTournaments.length === 0 ? (
        <Row>
          <Col lg={12} style={{ textAlign: "center", paddingTop: "50px" }}>
            <span className="text-muted font-weight-bolder font-size-h5">
              No active tournaments going on.
            </span>
          </Col>
        </Row>
      ) : (
        activeTournaments.map((game) => {
          return (
            <Row>
              <Col lg={12}>
                <BoxItem obj={game} />
              </Col>
            </Row>
          );
        })
      )}
    </Paper>
  );
};

export default MyActiveTournaments;
