import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../mycomponents/roleSwitch";

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("player");
  const [tncAgree, setTncAgree] = useState("");
  const [goAhead, setGoAhead] = useState(false);
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
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>I'm</Form.Label>
                      <CustomizedSwitches role={role} setRole={setRole} />
                    </Form.Group>

                    <Form.Group controlId="formBasicChecbox">
                      <Form.Label>Agree T&C and Privacy Policy</Form.Label>
                      <Form.Check
                        style={{ marginTop: "10px" }}
                        type="checkbox"
                        label="I Agree"
                        onChange={(e) => handleCheck(e.target.checked)}
                      />
                      <Form.Label
                        style={{
                          fontSize: "10px",
                          marginTop: "10px",
                          color: "#c4c4c4",
                        }}
                      >
                        By checking following checkbox you agree of our{" "}
                        <a href="#">Tearms and Conditions</a> and{" "}
                        <a href="#">Privacy Policy </a>
                      </Form.Label>
                    </Form.Group>
                    <Button
                      style={{ minWidth: "100px" }}
                      variant="primary"
                      type="submit"
                      disabled={!goAhead && true}
                      onClick={(e) => handleLogin(e)}
                    >
                      Login
                    </Button>
                    <Form.Group style={{ marginTop: "20px" }}>
                      <Form.Label>
                        <Link to="#" style={{ color: "#c4c4c4" }}>
                          Forgot Password?
                        </Link>
                      </Form.Label>

                      <Form.Label style={{ float: "right" }}>
                        <Link to="/signup-new">
                          Don't have a account? Create one.
                        </Link>
                      </Form.Label>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Paper>
          </Col>
        </Row>
      </div>
    </Box>
  );
};
export default LoginPage;
