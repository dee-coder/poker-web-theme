import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../mycomponents/roleSwitch";
import RoleTabes from "../mycomponents/signupRoleTabs";

const SingupPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("player");
  const [tncAgree, setTncAgree] = useState("");
  const [goAhead, setGoAhead] = useState(false);
  const [key, setKey] = useState(1);
  useEffect(() => {
    console.log("email:", email);
    console.log("password:", password);
    console.log("role:", role);
    console.log("tncAgree:", tncAgree);
    console.log("goAhead:", goAhead);

    if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
      password.length > 6 &&
      role != "" &&
      tncAgree != ""
    ) {
      // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      setGoAhead(true);
    } else {
      setGoAhead(false);
    }
  }, [email, password, role, tncAgree, goAhead]);

  const handleCheck = (checked) => {
    if (checked) {
      setTncAgree(true);
    } else {
      setTncAgree(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("I am working.");
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
                    key={key}
                    setKey={setKey}
                    email={email}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    CustomizedSwitches={CustomizedSwitches}
                    role={role}
                    setRole={setRole}
                    handleCheck={handleCheck}
                    goAhead={goAhead}
                    handleLogin={handleLogin}
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
