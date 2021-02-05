import React, { Suspense, lazy, useState, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import TournamentByDate from "./pages/TournamentByDate";
import FindTournamentPage from "./pages/findtournamentPage";
import LoginPage from "./pages/loginPage";
import SingupPage from "./pages/signupPage";
import SettingHome from "./pages/SettingsPlayer/SettingHome";
import PlayerProfilePage from "./pages/PlayerProfilePage";
import Logout from "./mycomponents/logoutComponent";
import AdminSection from "./admin/adminSection";
import TournamentDetailsPage from "./pages/TournamentDetailsPage";
import NetworkDetailsPage from "./pages/NetworkDetailsPage";
import PagesDetailsPage from "./pages/PagesDetailsPage";
import SponsorsPage from "./pages/SponsorPage";
import PlayerPlusPage from "./pages/PlayerPlusPage";
import SuccessSubscription from "./pages/SuccessSubscriptionPage";
import AddSponsorPage from "./pages/AddSponsorPage";
import ViewSponsorsPage from "./pages/ViewSponsorsPage";
import AddSwapperPage from "./pages/AddSwapperPage";
import ViewSwapperPage from "./pages/ViewSwapperPage";
import SponsorProfilePage from "./pages/SponsorProfilePage";
import { ErrorPage1 } from "./modules/ErrorsExamples/ErrorPage1";
import BeSponsorPage from "./pages/BeSponsorPage";
import ViewSponsorshipPage from "./pages/ViewSponsorshipPage";
import ApplySponsorshipPage from "./pages/ApplySponsorshipPage";
import SponsorsActiveTournamentsPage from "./pages/SponsorsActiveTournamentsPage";
import SponsorsPendingTournaments from "./pages/SponsorsPendingTournamnts";
import SponsorsSponsoringTournamentPage from "./pages/SponsorsSponsoringTournamentPage";
import SponsorsSponsoredTournamentPage from "./pages/SponsorsSponsoredTournamentPage";
import InboxPage from "./pages/InboxPage";
import AllSponsorships from "./pages/Sponsorships/AllSponsorships";
import ViewProfileSponsor from "./pages/Sponsors/ViewProfileSponsor";
import ViewProfilePlayer from "./pages/Players/ViewProfilePlayer";
import FindTournamentsPage from "./pages/FindTournaments/find-tournament-page";
import HowItWorks from "./pages/ContentPages/HowItWorks";
import AboutUsPage from "./pages/ContentPages/About-us";
import Help from "./pages/ContentPages/Help";
import Event from "./pages/ContentPages/Event";
import ContactUsPage from "./pages/ContentPages/Contact-us";
import TermsPage from "./pages/ContentPages/TermsPage";
import PrivacyPage from "./pages/ContentPages/PrivacyPage";
import AddCredits from "./pages/Payments/AddCredits";
import SponserReviewPage from "./pages/ReviewPages/SponserReviewPage";


import HomePage from "./pages/ContentPages/HomePage";
import MyNotifications from "./pages/MyNotifications";
import WalletAndTransactionPage from "./pages/Payments/WalletAndTransactionsPage";
import TournamentSummary from "./pages/TournamentSummary";
import Blog from "./pages/ContentPages/Blogs";
import SingleBlog from "./pages/ContentPages/SingleBlog";
import PlayersActiveTournamentPage from "./pages/PlayersActiveTournamentPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

let userInfo = null;
export default function BasePage() {
  //useEffect(() => {
  //   userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //    //console.log('Base page');
  //  }) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  const [LoggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo === undefined || userInfo === null) {
      setLoggedIn(false);
      
    } else {
      setLoggedIn(true);
      
    }
  });

  return (
    <Switch>
      {/* Redirect from root URL to /dashboard. */}
      {LoggedIn && <Redirect exact from="/" to="/dashboard" />}
      <ContentRoute exact path="/" component={HomePage} />
      <ContentRoute path="/dashboard" component={DashboardPage} />
      {/* { /* PLAYER'S ROUTES */}
      {/*Create sponsorship or allotment of sponsorship by player*/}{" "}
      {/*Login required*/}
      <ContentRoute path="/sponsorship/create/:id" component={AddSponsorPage} />
      <ContentRoute path="/sponsorship/:id" component={ViewSponsorsPage} />
      <ContentRoute path="/sponsorship" component={AllSponsorships} />
      <ContentRoute path="/findtournaments" component={FindTournamentsPage} />
      {/* <ContentRoute path="/tournaments" component={FindTournamentsPage} /> */}

      <ContentRoute path="/notifications" component={MyNotifications} />
      <ContentRoute path="/payments" component={WalletAndTransactionPage} />
      <ContentRoute path="/addCredits" component={AddCredits} />
      <ContentRoute path="/result/:id" component={TournamentSummary} />
      <ContentRoute path="/settings/" component={SettingHome} />
      <ContentRoute
        path="/sponsor/profile/:id"
        component={ViewProfileSponsor}
      />
      <ContentRoute path="/player/profile/:id" component={ViewProfilePlayer} />
      <ContentRoute path="/reviews/:id" component={SponserReviewPage} />
      <ContentRoute path="/tournament/:id" component={TournamentDetailsPage} />
      <ContentRoute path="/dashboard" component={DashboardPage} />
      <ContentRoute path="/builder" component={BuilderPage} />
      <ContentRoute path="/my-page" component={MyPage} />
      <ContentRoute path="/games-by-date/:date" component={TournamentByDate} />
      <ContentRoute path="/findtournaments" component={FindTournamentsPage} />
      <ContentRoute path="/login-new" component={LoginPage} />
      <ContentRoute path="/signup-new" component={SingupPage} />
      <ContentRoute path="/player-profile" component={PlayerProfilePage} />
      <ContentRoute path="/details/:id" component={TournamentDetailsPage} />
      <ContentRoute path="/networks/:slug" component={NetworkDetailsPage} />
      <ContentRoute path="/pages/:slug" component={PagesDetailsPage} />
      <ContentRoute path="/sponsors/:id" component={SponsorsPage} />
      <ContentRoute path="/player-plus" component={PlayerPlusPage} />
      <ContentRoute path="/sponsor-profile" component={SponsorProfilePage} />
      <ContentRoute path="/upgrade-plan" component={PlayerPlusPage} />
      <ContentRoute
        path="/player/active-tournaments"
        component={PlayersActiveTournamentPage}
      />
      <ContentRoute
        path="/subscription/success"
        component={SuccessSubscription}
      />
      <ContentRoute exact path="/add-sponsor/:id" component={AddSponsorPage} />
      {/* <ContentRoute path="/view-sponsors" component={ViewSponsorsPage} /> */}
      <ContentRoute
        path="/sponsor/active-tournaments"
        component={SponsorsActiveTournamentsPage}
      />
      <ContentRoute
        path="/sponsor/pending-sponsorship"
        component={SponsorsPendingTournaments}
      />
      <ContentRoute
        path="/sponsor/sponsoring-tournaments"
        component={SponsorsSponsoringTournamentPage}
      />
      <ContentRoute
        path="/sponsor/sponsored-tournaments"
        component={SponsorsSponsoredTournamentPage}
      />
      <ContentRoute
        exact
        path="/be-sponsor/:allotid"
        component={BeSponsorPage}
      />
      <ContentRoute path="/view-sponsorship" component={ViewSponsorshipPage} />
      <ContentRoute exact path="/add-swap/:id" component={AddSwapperPage} />
      <ContentRoute path="/view-swap" component={ViewSwapperPage} />
      <ContentRoute
        path="/apply-sponsorship"
        component={ApplySponsorshipPage}
      />
      <ContentRoute path="/messages" component={InboxPage} />
      {/* <Route path="/error/error-v1" c omponent={ErrorPage1} /> */}
      {/* Content pages */}
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/trounaments" component={FindTournamentPage}/>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/help" component={Help} />
      <Route path="/event" component={Event} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={SingleBlog} />
      <Route path="/logout" component={Logout} />
      <Route path="/google-material" component={GoogleMaterialPage} />
      <Route path="/react-bootstrap" component={ReactBootstrapPage} />
      <Route path="/e-commerce" component={ECommercePage} />
      <Route path="/admin" component={AdminSection} />
      {/* <Redirect to="error/error-v1" /> */}
    </Switch>
  );
  
}
