import { Box, Paper } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import CustomizedSwitches from "../mycomponents/roleSwitch";
import RoleTabes from "../mycomponents/signupRoleTabs";
import JsonUrl from "../../apiUrl.json";

const SingupPage = () => {
  const classes = useStyles();
  const [roleKey, setRoleKey] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [network, setNetwork] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [goAhead, setGoAhead] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorContent, setErrorContent] = useState("");
  const [redirectPage, setRedirectPage] = useState(false);

  useEffect(() => {
    ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    if (roleKey === 1) {
      //player
      ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      if (
        goAhead &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
        password === confirmPassword
      ) {
        setShowAlert(false);
        console.log("run");
        //hit api

        hitApiForRegistration(roleKey);
        //console.log(result);
      } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setErrorContent("Email must be in valid format.");
        }
        if (password !== confirmPassword) {
          setErrorContent("Password are not matching while confirming.");
        }
        if (!goAhead) {
          setErrorContent("All fields are required to fill.");
        }
        setShowAlert(true);
      }
    } else {
      if (
        goAhead &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
        password === confirmPassword
      ) {
        setShowAlert(false);
        console.log("run");
        //hit api
        hitApiForRegistration(roleKey);
      } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setErrorContent("Email must be in valid format.");
        } else if (password !== confirmPassword) {
          setErrorContent("Password are not matching while confirming.");
        } else if (!goAhead) {
          setErrorContent("All fields are required to fill.");
        }
        setShowAlert(true);
      }
      //sponsor
    }
  };

  function hitApiForRegistration(roleKey) {
    var url = JsonUrl.baseUrl;
    var role = "";
    var body = {};
    if (roleKey === 1) {
      url = url + JsonUrl.signupPlayer;
      body = {
        name: firstName + lastName,
        email: email,
        password: password,
        network: network,
        username: username,
      };
      role = "player";
    } else {
      url = url + JsonUrl.signupSponsor;
      role = "sponsor";
    }
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        localStorage.setItem("userInfo", JSON.stringify(json.data));
        localStorage.setItem("role", role);

        setRedirectPage(true);
      })
      .catch((err) => {
        console.log(err.message);
        return err.message;
      });
  }

  const handleSwitch = (e) => {
    console.log(e);
    setRoleKey(e);
    setEmail("");
    setPassword("");
    setFullName("");
    setUserName("");
    setConfirmPassword("");
    setNetwork("");
    setFirstName("");
    setLastName("");
    setTnc(false);
    setGoAhead(false);
    setShowAlert(false);
  };
  return (
    <Box>
      <div className={classes.root}>
        {redirectPage && <Redirect to="/findtournament" />}
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
                    showAlert={showAlert}
                    setShowAlert={setShowAlert}
                    handleSwitch={handleSwitch}
                    errorContent={errorContent}
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
