import React from "react";
import GlobalStyles from "styles/GlobalStyles";
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

import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";

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
import JwtStaffRegister from "pages/auths/staffRegister";

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

import ThankYouPage from "ThankYouPage.js";
import Business from "pages/mainPages/Business";

//Shop-OWNER
import Staff from "./pages/shopOwner/staff";
import InviteStaff from "./pages/shopOwner/inviteStaff";
import Service from "./pages/shopOwner/service";
import AddService from "./pages/shopOwner/addService";
import EditService from "pages/shopOwner/editService";
import Waitlist from "./pages/shopOwner/waitlist";
import OwnerDashboard from "pages/shopOwner/OwnerDashboard";
// import OwnerCalendar from "pages/shopOwner/OwnerCalendar";
import FullCalendarComponent from "pages/shopOwner/OwnerCalendar";

//STAFF
import Dashboards from "pages/Staffs/Dashboards";

//USER
import BookAppointment from "pages/user/BookAppointment";
import Dashboard from "pages/user/Dashboard";


import { Routes, Route } from "react-router-dom";
import ShopOwnerAuth from "pages/auths/ShopOwnerAuth";
import UserAuth from "pages/auths/UserAuth";
import StaffAuth from "pages/auths/StaffAuth";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Routes>
        {/* auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register-business/:id" element={<RegisterBusiness />} />
        <Route path="/send-verify" element={<EmailSent />} />
        <Route path="/staff-verify/:token" element={<JwtStaffRegister />} />
        <Route
          path="/complete-registration/:token"
          element={<CompleteRegistration />}
        />

        <Route path="/components/forms" element={<Forms />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/accordions" element={<Accordion />} />
        <Route path="/components/buttons" element={<Buttons />} />
        <Route path="/components/tables" element={<Tables />} />
        <Route path="/components/modals" element={<Modals />} />
        <Route path="/components/badges" element={<Badges />} />
        <Route path="/components/toasts" element={<Toasts />} />
        <Route path="/components/popovers" element={<Popovers />} />
        <Route path="/components/tabs" element={<Tabs />} />
        <Route path="/tables/bootstrap-tables" element={<BootstrapTables />} />
        <Route path="/components/alerts" element={<Alerts />} />
        <Route path="/components/tooltips" element={<Tooltips />} />

        {/* protect these routes --only logged in users */}
        <Route element={<ShopOwnerAuth />}>
          <Route path="/shop-owner/dashboard" element={<OwnerDashboard />} />
          <Route path="shop-owner/staff" element={<Staff />} />
          <Route path="shop-owner/invite-staff" element={<InviteStaff />} />
          <Route path="shop-owner/services" element={<Service />} />
          <Route path="shop-owner/add-service" element={<AddService />} />
          <Route path="owner/settings" element={<Settings />} />
          <Route
            path="shop-owner/services/edit/:id"
            element={<EditService />}
          />
          <Route path="shop-owner/waitlist" element={<Waitlist />} />
          <Route path="shop-owner/calendar" element={<FullCalendarComponent />} />
        </Route>

        <Route element={<UserAuth />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<StaffAuth />}>
          <Route path="/staff/dashboard" element={<Dashboards />} />
        </Route>

        {/* home pages */}
        <Route path="/" element={<HotelTravelLandingPage />} />
        <Route path="/business/:id" element={<Business />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
