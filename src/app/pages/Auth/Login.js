import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormattedMessage, injectIntl } from "react-intl";
import { Button, Tab, Nav, Col, Row } from "react-bootstrap";
import ForgotPassword from './ForgotPasswordPage';
import API from "../../../apiUrl.json";
import bcrypt from "bcryptjs";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("player");
  const [Tnc, setTnc] = useState(false);
  const [doRedirect, redirectToDashboard] = useState(false);
  // const LoginSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Wrong email format")
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required(
  //       intl.formatMessage({
  //         id: "AUTH.VALIDATION.REQUIRED_FIELD",
  //       })
  //     ),
  //   password: Yup.string()
  //     .min(3, "Minimum 3 symbols")
  //     .max(50, "Maximum 50 symbols")
  //     .required(
  //       intl.formatMessage({
  //         id: "AUTH.VALIDATION.REQUIRED_FIELD",
  //       })
  //     ),
  // });

  const handleSwitch = (role) => {
    setRole(role);
    setEmail("");
    setPassword("");
    setTnc(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    var url = "";
    if (Role === "player") {
      url = API.baseUrl + API.signinPlayer;
    } else {
      url = API.baseUrl + API.signinSponsor;
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: Email, password: Password }),
    })
      .then((json) => json.json())
      .then((res) => {
        console.log(res);
        if (res.status === "user_found") {
          localStorage.setItem("userInfo", JSON.stringify(res.result));
          localStorage.setItem("role", Role);
          redirectToDashboard(true);
        }
      });
  };

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      {doRedirect && <Redirect to="/dashboard" />}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">Login</h3>
        <p className="text-muted font-weight-bold">
          Enter your username and password
        </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form className="form fv-plugins-bootstrap fv-plugins-framework">
        <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
          <div className="alert-text ">
            Please select appropriate account of <strong>Player</strong> or{" "}
            <strong>Sponsor</strong>
          </div>
        </div>

        <Tab.Container id="top-tabs-example" defaultActiveKey="player">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link
                    eventKey="player"
                    onClick={(e) => handleSwitch("player")}
                  >
                    I am Player
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="sponsor"
                    onClick={(e) => handleSwitch("sponsor")}
                  >
                    I am Sponsor
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col sm={12}>
              {/* <Tab.Content>
                <Tab.Pane eventKey="player">I am Player</Tab.Pane>
                <Tab.Pane eventKey="sponsor">I am Sponsor</Tab.Pane>
              </Tab.Content> */}
            </Col>
          </Row>
        </Tab.Container>

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6`}
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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

        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Forgot password?
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            onClick={(e) => handleLogin(e)}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}
export default Login;
