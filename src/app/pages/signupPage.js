import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../mycomponents/roleSwitch";
import RoleTabes from "../mycomponents/signupRoleTabs";

const SingupPage = () => {
  const classes = useStyles();
  const [roleKey, setRoleKey] = useState(1);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullname, setFullName] = useState();
  const [username, setUserName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [network, setNetwork] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [tnc, setTnc] = useState(false);
  const [goAhead, setGoAhead] = useState(false);

  useEffect(() => {
    ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
  }, []);

  const handleSignup = () => {
    console.log("Hi. I am signup.");
  };

  return (
    <Box>
      <div className={classes.root}>
        <Row className="justify-content-lg-center">
          <Col lg={6}>
            <Paper className={classes.paper}>
              <Card>
                <Card.Body>
                  <RoleTabes
                    roleKey={roleKey}
                    setRoleKey={setRoleKey}
                    email={email}
                    password={password}
                    firstName={firstName}
                    lastName={lastName}
                    username={username}
                    network={network}
                    handleSignup={handleSignup}
                    tnc={tnc}
                    setTnc={setTnc}
                    goAhead={goAhead}
                    setGoAhead={setGoAhead}
                    setNetwork={setNetwork}
                    setUserName={setUserName}
                    setPassword={setPassword}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                  />
                </Card.Body>
              </Card>
            </Paper>
          </Col>
        </Row>
      </div>
    </Box>
  );
};
export default SingupPage;
