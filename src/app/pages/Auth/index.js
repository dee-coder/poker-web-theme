/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

import "../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import queryString from "query-string";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPasswordPage";
import { ContentRoute } from "../../../_metronic/layout";
import ResetPassword from "./ResetPassword";

export function AuthCustom(props) {

  const { pathname } = props.location;
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              {/* start:: Aside header */}
              <Link to="/" className="flex-column-auto mt-5">
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/logos/logo-letter-1.png")}
                />
              </Link>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 text-white">
                  Welcome to Pokerswapping!
                </h3>
                <p className="font-weight-lighter text-white opacity-80">
                  Play with thousands of players and sponsors and earn much
                  better.
                </p>
              </div>
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2020 Pokerswapping
                </div>
                <div className="d-flex">
                  <Link to="/privacy" className="text-white">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Legal
                  </Link>
                  <Link to="/Contact-Us" className="text-white ml-10">
                    Contact
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
            {/*begin::Content header*/}

            <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
              <span className="font-weight-bold text-dark-50">
                {pathname === "/auth/login" ? (
                  <p> Don't have an account yet?</p>
                ) : (
                  <p>Already have an account?</p>
                )}
              </span>
              {pathname === "/auth/login" ? (
                <Link
                  to="/auth/signup"
                  className="font-weight-bold ml-2"
                  id="kt_login_signup"
                >
                  Sign Up!
                </Link>
              ) : (
                <Link
                  to="/auth/login"
                  className="font-weight-bold ml-2"
                  id="kt_login_signup"
                >
                  Login!
                </Link>
              )}
            </div>
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div
              className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0"
              style={{ paddingTop: "50px" }}
            >
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute path="/auth/signup" component={Signup} />
                <ContentRoute path="/auth/forgot-password" component={ForgotPassword}/>
                <ContentRoute path="/auth/reset-password/:token" component={ResetPassword}/>
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 Pokerswapping
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                  to="/contact-us"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}