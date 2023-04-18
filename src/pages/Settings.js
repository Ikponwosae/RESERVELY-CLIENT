import React from "react";
import OwnerInfoForm from "components/OwnerInfoForm"; 
import BusinessInfoForm from "components/BusinessInfoForm";
import Sidebar from "components/Sidebar";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";

export default () => {
  return (
    <>
      <Sidebar />
      <AnimationRevealPage>
        <main className="content">
          <ScrollToTop />
          <OwnerInfoForm />
          <BusinessInfoForm />
          <Footer />
        </main>
      </AnimationRevealPage>
    </>
  );
};
