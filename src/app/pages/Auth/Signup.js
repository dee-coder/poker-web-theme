import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import API from "../../../apiUrl.json";
import { Redirect } from "react-router-dom";
import bcrypt from "bcryptjs";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import RoleTabs from "../../mycomponents/signupRoleTabs";
import DrawerSignup from "./DrawerSignup";
import { Box, Drawer, Paper, Typography } from "@material-ui/core";

function Signup(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [Role, setRole] = useState("player");
  const [Fullname, setFullname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [ConfirmPassword, setConfirmPassword] = useState(null);
  const [PlayerNetwork, setPlayerNetwork] = useState(null);
  const [Networks, setNetwork] = useState([]);
  const [Username, setUsername] = useState(null);
  const [goAhead, setGoAhead] = useState(false);
  const [errorContent, setErrorContent] = useState(null);
  const [RedirectPage, setRedirectPage] = useState(false);
  const [ShowAlert, setShowAlert] = useState();
  const [Tnc, setTnc] = useState(false);
  const [signupDrawer, setSignupDrawer] = useState();

  useEffect(() => {
    console.log("Running!");
    fetch(API.baseUrl + API.getAllNetworks, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((json) => json.json())
      .then((res) => {
        //console.log("Networks : ", res);
        setNetwork(res.tournaments);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // console.log("Email", Email);
    // console.log("Fullname", Fullname);
    // console.log("Password", Password);
    // console.log("ConfirmPassword", ConfirmPassword);
    // console.log("PlayerNetwork", PlayerNetwork);

    // console.log("Username", Username);
    // console.log("Tnc", Tnc);
    if (Role === "player") {
      if (
        Email !== null &&
        Fullname !== null &&
        Password !== null &&
        ConfirmPassword !== null &&
        PlayerNetwork !== null &&
        Username !== null &&
        Tnc
      ) {
        setGoAhead(true);
      } else {
        setGoAhead(false);
      }
    } else {
      if (
        Email !== null &&
        Fullname !== null &&
        Password !== null &&
        ConfirmPassword !== null &&
        Tnc
      ) {
        setGoAhead(true);
      } else {
        setGoAhead(false);
      }
    }
    console.log(goAhead);
  }, [
    Email,
    Fullname,
    Tnc,
    Role,
    Password,
    ConfirmPassword,
    PlayerNetwork,
    Username,
    RedirectPage,
  ]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (Role === "player") {
      //player
      ///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
      if (
        goAhead &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email) &&
        Password === ConfirmPassword
      ) {
        //hit api

        hitApiForRegistration(Role);
        //console.log(result);
      } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
          setErrorContent("Email must be in valid format.");
        }
        if (Password !== ConfirmPassword) {
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
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email) &&
        Password === ConfirmPassword
      ) {
        //setShowAlert(false);
        //console.log("run");
        //hit api
        hitApiForRegistration(Role);
      } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
          setErrorContent("Email must be in valid format.");
        } else if (Password !== ConfirmPassword) {
          setErrorContent("Password are not matching while confirming.");
        } else if (!goAhead) {
          setErrorContent("All fields are required to fill.");
        }
        setShowAlert(true);
      }
      //sponsor
    }
  };

  async function hitApiForRegistration(roleKey) {
    var url = API.baseUrl;
    var role = "";
    var body = {};
    //var encrypted = await bcrypt.hash(Password, 10);

    //console.log(encrypted);
    if (Role === "player") {
      url = url + API.signupPlayer;
      body = {
        name: Fullname,
        email: Email,
        password: Password,
        network: PlayerNetwork,
        username: Username,
      };
      role = "player";
    } else {
      url = url + API.signupSponsor;
      role = "sponsor";
      body = {
        name: Fullname,
        email: Email,
        password: Password,
      };
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
        if (json.status === "ok") {
          localStorage.setItem("userInfo", JSON.stringify(json.data));
          localStorage.setItem("role", role);
          setRedirectPage(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
        return err.message;
      });
  }

  const handleSwitch = (e) => {
    //console.log(e);
    setRole(e);
    setEmail("");
    setPassword("");
    setFullname("");
    setUsername("");
    setConfirmPassword("");
    setPlayerNetwork("");
    setTnc(false);
    setGoAhead(false);
    setShowAlert(false);
    console.log(Role);
  };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      {RedirectPage && <Redirect to="/dashboard" />}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.REGISTER.TITLE" />
        </h3>
        <p className="text-muted font-weight-bold">
          Enter your details to create your account
        </p>
      </div>

      <Tab.Container id="top-tabs-example" defaultActiveKey="player">
        <Row>
          <Col sm={12}>
            <Nav variant="pills" className="flex-row">
              <Nav.Item onClick={(e) => handleSwitch("player")}>
                <Nav.Link eventKey="player">I am Player</Nav.Link>
              </Nav.Item>
              <Nav.Item onClick={(e) => handleSwitch("sponsor")}>
                <Nav.Link eventKey="sponsor">I am Sponsor</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="player">
                <form
                  id="kt_login_signin_form"
                  className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                >
                  {/* begin: Alert */}

                  {/* end: Alert */}

                  {/* begin: Fullname */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Full name"
                      type="text"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      value={Fullname}
                      name="Fullname"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  {/* end: Fullname */}

                  {/* begin: Email */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Email"
                      type="email"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* end: Email */}

                  {/* begin: Username */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="User name"
                      type="text"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="username"
                      value={Username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {/* end: Username */}

                  {/* begin: Password */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Password"
                      type="password"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* end: Password */}

                  {/* begin: Confirm Password */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="changepassword"
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group fv-plugins-icon-container">
                    <select
                  
                      onChange={(e) =>{ setPlayerNetwork(e.target.value)
                        setSignupDrawer(true)}}
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                    >
                      <option value={null}>Select Network</option>
                      {Networks.map((network) => {
                        return (
                          <option value={network.slug}>{network.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  {/* end: Confirm Password */}

                  {/* begin: Terms and Conditions */}
                  <div className="form-group">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        className="m-1"
                        checked={Tnc}
                        onChange={(e) => (Tnc ? setTnc(false) : setTnc(true))}
                      />
                      <Link
                        to="/terms"
                        target="_blank"
                        className="mr-1"
                        rel="noopener noreferrer"
                      >
                        I agree the Terms & Conditions
                      </Link>
                      <span />
                    </label>
                  </div>
                  {/* end: Terms and Conditions */}
                  <div className="form-group d-flex flex-wrap flex-center">
                    <button
                      type="submit"
                      style={{ minWidth: "100px" }}
                      variant="primary"
                      type="submit"
                      disabled={!goAhead ? true : false}
                      onClick={(e) => handleSignup(e)}
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                    >
                      <span>Signup</span>
                      {loading && (
                        <span className="ml-3 spinner spinner-white"></span>
                      )}
                    </button>

                    <Link to="/auth/login">
                      <button
                        type="button"
                        className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="sponsor">
                {" "}
                <form
                  id="kt_login_signin_form"
                  className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                >
                  {/* begin: Alert */}

                  {/* end: Alert */}

                  {/* begin: Fullname */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Full name"
                      type="text"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      value={Fullname}
                      name="Fullname"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  {/* end: Fullname */}

                  {/* begin: Email */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Email"
                      type="email"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* end: Email */}

                  {/* begin: Username */}

                  {/* end: Username */}

                  {/* begin: Password */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Password"
                      type="password"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* end: Password */}

                  {/* begin: Confirm Password */}
                  <div className="form-group fv-plugins-icon-container">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      className={`form-control form-control-solid h-auto py-5 px-6 `}
                      name="changepassword"
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {/* end: Confirm Password */}

                  {/* begin: Terms and Conditions */}
                  <div className="form-group">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        className="m-1"
                        checked={Tnc}
                        onChange={(e) => (Tnc ? setTnc(false) : setTnc(true))}
                      />
                      <Link
                        to="/terms"
                        target="_blank"
                        className="mr-1"
                        rel="noopener noreferrer"
                      >
                        I agree the Terms & Conditions
                      </Link>
                      <span />
                    </label>
                  </div>
                  {/* end: Terms and Conditions */}
                  <div className="form-group d-flex flex-wrap flex-center">
                    <button
                      type="submit"
                      style={{ minWidth: "100px" }}
                      variant="primary"
                      type="submit"
                      disabled={!goAhead ? true : false}
                      onClick={(e) => handleSignup(e)}
                      className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                    >
                      <span>Signup</span>
                      {loading && (
                        <span className="ml-3 spinner spinner-white"></span>
                      )}
                    </button>

                    <Link to="/auth/login">
                      <button
                        type="button"
                        className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>

        <Drawer
        anchor="left"
        open={signupDrawer}
        onClose={() => setSignupDrawer(false)}>
        <DrawerSignup
          setViewTournamentMode={setSignupDrawer}
          network= {PlayerNetwork}
        />

      </Drawer>
      </Tab.Container>
       


    </div>
  );
}

export default Signup;