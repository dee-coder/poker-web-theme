import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import TournamentByDate from "./pages/TournamentByDate";
import FindTournamentPage from "./pages/findtournamentPage";
import LoginPage from "./pages/loginPage";
import SingupPage from "./pages/signupPage";
import PlayerProfilePage from "./pages/PlayerProfilePage";
import Logout from "./mycomponents/logoutComponent";
import AdminSection from "./admin/adminSection";
import TournamentDetailsPage from "./pages/TournamentDetailsPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Switch>
      {
        /* Redirect from root URL to /dashboard. */
        <Redirect exact from="/" to="/dashboard" />
      }
      <ContentRoute path="/dashboard" component={DashboardPage} />
      <ContentRoute path="/builder" component={BuilderPage} />
      <ContentRoute path="/my-page" component={MyPage} />
      <ContentRoute path="/games-by-date/:date" component={TournamentByDate} />
      <ContentRoute path="/findtournaments" component={FindTournamentPage} />
      <ContentRoute path="/login-new" component={LoginPage} />
      <ContentRoute path="/signup-new" component={SingupPage} />
      <ContentRoute path="/player-profile" component={PlayerProfilePage} />
      <ContentRoute path="/details/:id" component={TournamentDetailsPage} />

      <Route path="/logout" component={Logout} />

      <Route path="/google-material" component={GoogleMaterialPage} />
      <Route path="/react-bootstrap" component={ReactBootstrapPage} />
      <Route path="/e-commerce" component={ECommercePage} />
      <Route path="/admin" component={AdminSection} />
      <Redirect to="error/error-v1" />
    </Switch>
  );
}
