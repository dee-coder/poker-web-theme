import React, { useState, useEffect } from "react";
import "../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import axios from "axios";
import API from "../../../apiUrl.json";
import { Redirect } from "react-router-dom";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Axios from "axios";
import { closestTo } from "date-fns";

const ChangePassword = (props) => {
  const [pass1, setPass1] = useState(null);
  const [pass2, setPass2] = useState(null);
  const [status, setStatus] = useState(null);
  const [redirectPage, setRedirectPage] = useState(false);
  const [tokeDetail, setTokeDetail] = useState(null);
  const [passwordMatchingStatus, setPasswordMatchingStatus] = useState(true);
  const [RedirectToDashBoard, setRedirectToDashBoard] = useState(false);

  // useEffect(() => {
  //   if (props.match.params.token === undefined) {
  //     setRedirectPage(true);
  //   } else {
  //     setRedirectPage(false);
  //     console.log(props.match.params.token);
  //     fetch(API.baseUrl + API.validateToken, {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         token: props.match.params.token,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //         if (json.status === "token_found") {
  //           setTokeDetail(json.tokeDetails);

  //           //if(json.tokeDetail.status)
  //         } else {
  //           setRedirectPage(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // }, []);

  const confirmReset = (e) => {
  //   e.preventDefault();
  //   console.log(pass1);
  //   console.log(pass2);
  //   if (pass1 === pass2) {
  //     console.log(pass1);
  //     setPasswordMatchingStatus(true);

  //     fetch(API.baseUrl + API.resetPassword, {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         token: props.match.params.token,
  //         email: tokeDetail.user_email,
  //         password: pass1,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         // console.log(json);
  //         if (json.status === "OK") {
  //           localStorage.setItem("userInfo", JSON.stringify(json.userInfo));
  //           localStorage.setItem("role", json.role);
  //           setRedirectToDashBoard(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   } else {
  //     setPasswordMatchingStatus(false);
  //   }
  };

  // if (RedirectToDashBoard) {
  //   return <Redirect to="/dashboard" />;
  // } else {
    return (
      <div style={{ width: "400px" }}>
        <div className="text-center mb-10 mb-lg-20">
          <h3 className="font-size-h1">Choose Password</h3>
          <p className="text-muted font-weight-bold">Enter your New Password</p>
        </div>
        <form className="form fv-plugins-bootstrap fv-plugins-framework">
          <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
            <div className="alert-text ">
              Please select a Strong <strong>Password</strong>
            </div>
          </div>

          {passwordMatchingStatus === false && (
            <div
              className={`mb-10 alert alert-custom alert-light-danger alert-dismissible`}>
              <div className="alert-text ">Password are not Matching</div>
            </div>
          )}

          <div className="form-group fv-plugins-icon-container">
            <input
              type="password"
              placeholder="Enter new password"
              className={`mb-10 form-control form-control-solid h-auto py-5 px-6`}
              onChange={(e) => setPass1(e.target.value)}
            />
          </div>

          <div className="form-group fv-plugins-icon-container">
            <input
              type="password"
              placeholder="Confirm new password"
              className={`mb-10 form-control form-control-solid h-auto py-5 px-6`}
              onChange={(e) => setPass2(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
              onClick={(e) => confirmReset(e)}>
              Change Password
            </button>
          </div>
        </form>
      </div>
    );
  // }
};
export default ChangePassword;
