import { Tabs, Tab, Form, Button, Col, InputGroup } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoleTabs = ({
  key,
  setKey,
  email,
  setEmail,
  setPassword,
  CustomizedSwitches,
  role,
  setRole,
  handleCheck,
  goAhead,
  handleLogin,
}) => {
  const handleSelect = (key) => {
    //setKey(key);
  };
  return (
    <Tabs activeKey={key} onSelect={handleSelect}>
      <Tab eventKey={1} title="Player">
        <div style={{ marginTop: "50px" }}>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Confirm Password"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGridState">
                <Form.Label>Network</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
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
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Confirm Password"
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
