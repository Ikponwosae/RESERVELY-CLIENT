import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Routs } from "../routs";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import Users from "./Users";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./auths/Signin";
import Signup from "./auths/Signup";
import ForgotPassword from "./auths/ForgotPassword";
import ResetPassword from "./auths/ResetPassword";
import Lock from "./auths/Lock";
import NotFoundPage from "./auths/NotFound";
import ServerError from "./auths/ServerError";

// documentation pages
// import DocsOverview from "./documentation/DocsOverview";
// import DocsDownload from "./documentation/DocsDownload";
// import DocsQuickStart from "./documentation/DocsQuickStart";
// import DocsLicense from "./documentation/DocsLicense";
// import DocsFolderStructure from "./documentation/DocsFolderStructure";
// import DocsBuild from "./documentation/DocsBuild";
// import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Routes>
    <RouteWithLoader exact path={Routs.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routs.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routs.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routs.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routs.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routs.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routs.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routs.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routs.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routs.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routs.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routs.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routs.Users.path} component={Users} />
    <RouteWithSidebar exact path={Routs.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routs.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routs.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routs.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routs.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routs.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routs.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routs.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routs.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routs.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routs.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routs.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routs.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routs.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routs.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routs.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routs.Toasts.path} component={Toasts} />

    {/* documentation */}
    {/* <RouteWithSidebar exact path={Routs.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routs.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routs.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routs.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routs.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routs.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routs.DocsChangelog.path} component={DocsChangelog} /> */}

    <Navigate to={Routs.NotFound.path} />
  </Routes>
);
