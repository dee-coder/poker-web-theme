import { Tabs, Tab, Form, Button, Col, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoleTabs = ({
  roleKey,
  setRoleKey,
  email,
  password,
  firstName,
  lastName,
  username,
  network,
  handleSignup,
  tnc,
  setTnc,
  goAhead,
  setGoAhead,
  setNetwork,
  setUserName,
  setPassword,
  setFirstName,
  setLastName,
  setEmail,
  confirmPassword,
  setConfirmPassword,
  showAlert,
  setShowAlert,
  handleSwitch,
  errorContent,
}) => {
  useEffect(() => {
    if (roleKey === 1) {
      if (
        email !== "" &&
        firstName !== "" &&
        lastName !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        network !== "" &&
        username !== "" &&
        tnc
      ) {
        setGoAhead(true);
      } else {
        setGoAhead(false);
      }
    } else {
      if (
        email !== "" &&
        firstName !== "" &&
        lastName !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        tnc
      ) {
        setGoAhead(true);
      } else {
        setGoAhead(false);
      }
    }
  }, [
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
    network,
    username,
    tnc,
    roleKey,
  ]);
  const onSubmit = (key) => {
    //setKey(key);
  };

  return (
    <Tabs activeKey={roleKey} onSelect={(e) => handleSwitch(e)}>
      <Tab eventKey={1} title="Player">
        <div style={{ marginTop: "50px" }}>
          <Form>
            {showAlert && (
              <div>
                <Form.Label style={{ fontSize: "12px", color: "red" }}>
                  {" "}
                  {errorContent}
                </Form.Label>
                <br />
              </div>
            )}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  //value={password}
                  //onChange = {}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGridState">
                <Form.Label>Network</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setNetwork(e.target.value)}
                >
                  <option value={null}>Select Network</option>
                  <option value="skypoker">SkyPoker</option>
                  <option value="partypoker">PartyPoker</option>
                  <option value="pokerstars">PokerStars</option>
                  <option value="888poker">888Poker</option>
                  <option value="fulltilt">FullTilt</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Network Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formBasicChecbox">
                <Form.Label>Agree T&C and Privacy Policy</Form.Label>
                <Form.Check
                  style={{ marginTop: "10px" }}
                  type="checkbox"
                  label="I Agree"
                  checked={tnc ? true : false}
                  onChange={(e) => {
                    e.target.checked ? setTnc(true) : setTnc(false);
                  }}
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
                disabled={!goAhead ? true : false}
                onClick={(e) => handleSignup(e)}
              >
                Signup
              </Button>
            </Form.Row>
            <Form.Row style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>
                  <Link to="/login-new">
                    Already have a account? Login here.
                  </Link>
                </Form.Label>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </Tab>
      <Tab eventKey={2} title="Sponsor">
        <div style={{ marginTop: "50px" }}>
          <Form>
            {showAlert && (
              <div>
                <Form.Label style={{ fontSize: "12px", color: "red" }}>
                  {" "}
                  {errorContent}
                </Form.Label>
                <br />
              </div>
            )}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  //value={password}
                  //onChange = {}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formBasicChecbox">
                <Form.Label>Agree T&C and Privacy Policy</Form.Label>
                <Form.Check
                  style={{ marginTop: "10px" }}
                  type="checkbox"
                  label="I Agree"
                  checked={tnc ? true : false}
                  onChange={(e) => {
                    e.target.checked ? setTnc(true) : setTnc(false);
                  }}
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
                disabled={!goAhead ? true : false}
                onClick={(e) => handleSignup(e)}
              >
                Signup
              </Button>
            </Form.Row>
            <Form.Row style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>
                  <Link to="/login-new">
                    Already have a account? Login here.
                  </Link>
                </Form.Label>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </Tab>
    </Tabs>
  );
};

export default RoleTabs;
