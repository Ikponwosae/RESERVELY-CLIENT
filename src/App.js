import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
// import * as serviceWorker from "./serviceWorker";
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

/* Ready Made Pages (from demos folder) */
import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import DashboardOverview from "pages/dashboard/DashboardOverview";

/* Inner Pages */
import LoginPage from "pages/auths/Signin.js";
import SignupPage from "pages/auths/Signup.js";
import ForgotPassword from "pages/auths/ForgotPassword";
import EmailSent from "pages/auths/EmailSent";
import NotFound from "pages/auths/NotFound";
import CompleteRegistration from "pages/auths/verifyAcc";
import AboutUsPage from "pages/mainPages/AboutUs.js";
import ContactUsPage from "pages/mainPages/ContactUs.js";
import Pricing from "pages/mainPages/Pricing";
import Settings from "pages/Settings";
import RegisterBusiness from "pages/auths/RegisterBusiness";

//components pages
import Accordion from "pages/components/Accordion";
import Buttons from "pages/components/Buttons";
import Forms from "pages/components/Forms";
import Tables from "pages/components/Tables";
import Modals from "pages/components/Modals";
import Badges from "pages/components/Badges";
import Toasts from "pages/components/Toasts"; 
import Popovers from "pages/components/Popovers";
import BootstrapTables from "pages/tables/BootstrapTables";
import Alerts from "pages/components/Alerts";
import Tooltips from "pages/components/Tooltips";
import Tabs from "pages/components/Tabs";
import MyCalendar from "components/Calendar";

import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";

//Shop-OWNER
import Staff from "./pages/shopOwner/staff"
import InviteStaff from "./pages/shopOwner/inviteStaff"
import Service from "./pages/shopOwner/service"
import AddService from "./pages/shopOwner/addService"
import EditService from "pages/shopOwner/editService"
import Waitlist from "./pages/shopOwner/waitlist"
import OwnerDashboard from "pages/shopOwner/OwnerDashboard";

//STAFF
import BookAppointments from "pages/Staffs/BookAppointments";
import Dashboards from "pages/Staffs/Dashboards";

//USER
import BookAppointment from "pages/user/BookAppointment";
import Dashboard from "pages/user/Dashboard";

//Role based authorization
import AuthGuard from "auth/AuthGuard";
import { authRoles } from "auth/authRoles";

import {  Routes, Route } from "react-router-dom";
// import { AuthProvider } from "contexts/JWTAuthContext";



export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <>
      <GlobalStyles />
        <Routes>
            
            {/* <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
            <Route path="/components/:type/:name" element={<ComponentRenderer />} /> */}
            {/* auth */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/calendar" element={<MyCalendar />} />
            
            <Route path="/send-verify" element={<EmailSent />} />
            <Route path="/complete-registration/:token"  element={<CompleteRegistration />} />
            <Route path="/dashboard-overview" element={<DashboardOverview />} />
            <Route path="/components/forms" element={<Forms />} />

              <Route path="/register-business/:id" element={<RegisterBusiness />} />
            {/* protect these routes --only logged in users */}
            <Route element={<AuthGuard role={authRoles.SHOPOWNER} />}>
              <Route path="/shop-owner/dashboard" element={<OwnerDashboard />} />
              {/* components  */}
              <Route path="/accordions" element={<Accordion />} />
              <Route path="/components/buttons" element={<Buttons />} />
              
              <Route path="/components/tables" element={<Tables />} />
              <Route path="/components/modals" element={<Modals />} />
              <Route path="/components/badges" element={<Badges />} />
              <Route path="/components/toasts" element={<Toasts />} />
              <Route path="/components/popovers" element={<Popovers />} />
              <Route path="/tables/bootstrap-tables" element={<BootstrapTables />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/components/alerts" element={<Alerts />} />
              <Route path="/components/tooltips" element={<Tooltips />} />
              

              {/*SHOP-OWNER */}
              <Route path="shop-owner/staff" element={<Staff />} />
              <Route path="shop-owner/invite-staff" element={<InviteStaff />} />
              <Route path="shop-owner/services" element={<Service />} />
              <Route path="shop-owner/add-service" element={<AddService />} />
              <Route path="shop-owner/services/edit/:id" element={<EditService />} />
              <Route path="shop-owner/waitlist" element={<Waitlist />} />
            </Route>

            <Route path="/book" element={<BookAppointment />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/components/tabs" element={<Tabs />} />
             

            <Route path="/books" element={<BookAppointments />} />
            <Route path="/staff/dashboard" element={<Dashboards />} />
            <Route path="/components/tabs" element={<Tabs />} />

            {/* home pages */}
            <Route path="/" element={<HotelTravelLandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />


            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

