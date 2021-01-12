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
import ContactUsPage from "./pages/ContentPages/Contact-us";
import HomePage from "./pages/ContentPages/HomePage";
import MyNotifications from "./pages/MyNotifications";
import WalletAndTransactionPage from "./pages/Payments/WalletAndTransactionsPage";
import TournamentSummary from "./pages/TournamentSummary";
import Blog from "./pages/ContentPages/Blogs";
import SingleBlog from "./pages/ContentPages/SingleBlog";

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
      <ContentRoute path="/tournaments" component={FindTournamentsPage} />
      <ContentRoute path="/notifications" component={MyNotifications} />
      <ContentRoute path="/payments" component={WalletAndTransactionPage} />
      <ContentRoute path="/result/:id" component = {TournamentSummary}/>
      {/*Show all sponsorships of players*/} {/*Login required*/}
      {/* <ContentRoute path="/sponsorships" component={} /> */}
      {/*Show a spacific sponsorships*/} {/*Login required*/}
      {/* <ContentRoute path="/sponsorships/:id" component={} /> */}
      {/*Show all active tournaments of spacific player*/} {/*Login required*/}
      {/* <ContentRoute path="/active" component={} /> */}
      {/*Show a spacific active tournaments of spacific player*/}{" "}
      {/*Login required*/}
      {/* <ContentRoute path="/active/:id" component={} /> */}
      {/*Show all sponsoring tournaments of spacific player*/}{" "}
      {/*Login required*/}
      {/* <ContentRoute path="/sponsoring" component={} /> */}
      {/*Show a spacific sponsoring tournaments of spacific player*/}{" "}
      {/*Login required*/}
      {/* <ContentRoute path="/sponsoring/:id" component={} /> */}
      {/*Show all sponsored tournaments by player*/} {/*Login required*/}
      {/* <ContentRoute path="/sponsored" component={} /> */}
      {/*Show s spacific sponsored tournament by player*/} {/*Login required*/}
      {/* <ContentRoute path="/sponsored/:id" component={} /> */}
      {/*Show all swapping of players*/} {/*Login required*/}
      {/* <ContentRoute path="/swapping" component={} /> */}
      {/*Show a spacific swapping of player*/} {/*Login required*/}
      {/* <ContentRoute path="/swapping/:id" component /> */}
      {/* SPONSOR'S ROUTES */}
      {/*Login for players*/}
      {/*Show all sponsorships of players*/}
      {/* <ContentRoute path="/sponsorships" component={} /> */}
      {/*Show a spacific sponsorships*/}
      {/*Apply on a sponsorship page*/}
      {/* <ContentRoute path="/apply/:id" component={} /> */}
      {/* COMMON ROUTES*/}
      {/*Show a profile of sponsor*/} {/*Login not required*/}
      <ContentRoute
        path="/sponsor/profile/:id"
        component={ViewProfileSponsor}
      />
      {/*Show a player profile based on id*/} {/*Login not required */}
      <ContentRoute path="/player/profile/:id" component={ViewProfilePlayer} />
      {/*Show a network page based on id*/} {/*Login not required*/}
      {/* <ContentRoute path="/networks/:id" component={} />  */}
      {/*Show a spacific page by id*/} {/*Login not required*/}
      {/* <ContentRoute path="/pages/:id" component={} /> */}
      {/*Show find tournaments page*/} {/*Login not required*/}
      {/* <ContentRoute path="/tournament" component={} /> */}
      <ContentRoute path="/tournament/:id" component={TournamentDetailsPage} />
      {/*Show tournament list based on filters*/}
      {/*Login not required*/}
      {/* <ContentRoute path="/tournament?filters" component={} /> */}
      {/*Show profiles of users*/} {/*Login required*/}
      {/* <ContentRoute path="/profile" component={} /> */}
      {/*Show messages of users*/} {/*Login required*/}
      {/* <ContentRoute path="/messages" component={} /> */}
      {/*Show a group chat*/} {/*Login required*/}
      {/* <ContentRoute path="/messages/:groupId" component={} /> */}
      {/*Statistics of user find out by its type ( Player / Sponsor ) { ?user&type } */}
      {/* <ContentRoute path="/statistics" component={} /> */}
      {/*Show wallet and add money to wallet*/}
      {/* <ContentRoute path="/wallet" component={} /> */}
      {/* Show all settings related to users */}
      {/* <ContentRoute path="/settings" component={} /> */}
      {/*Show all notifications of users */}
      {/* <ContentRoute path="/notifications" component={} /> */}
      {/* Show a type of notifications */}
      {/* <ContentRoute path="/notifications/type" component={} /> */}
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
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
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
