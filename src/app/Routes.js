/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { Dashboard } from "../_metronic/_partials";
import Logout from "../app/mycomponents/logoutComponent";
import AdminSection from "./admin/adminSection";
import { ErrorPage1 } from "./modules/ErrorsExamples/ErrorPage1";
import Login from "./modules/Auth/pages/Login";
import Registration from "./modules/Auth/pages/Registration";
import { AuthCustom } from "./pages/Auth";
import ForgotPassword from "./pages/Auth/ForgotPasswordPage";

export function Routes() {
  // const { isAuthorized } = useSelector(
  //   ({ auth }) => ({
  //     isAuthorized: auth.user != null,
  //   }),
  //   shallowEqual
  // );

  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo === undefined || userInfo === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  });

  const isAuthorized =
    localStorage.getItem("userInfo") === undefined ? false : true;

  return (
    <Switch>
      {LoggedIn && <Redirect exact from="/" to="/dashboard" />}
      {/* <Route path="login-new" component={AuthPage} /> */}
      {/* ?type="user"&action="login"*/}

      <Route path="/auth" component={AuthCustom} />
      <Route path="/recovery" component={ForgotPassword} />

      <Route path="/error" component={ErrorsPage} />
      <Route exact path="/error/error-v1" component={ErrorPage1} />

      <Route path="/logout" component={Logout} />

      <Layout>
        <BasePage />
      </Layout>
    </Switch>
  );
}
