import React from "react";
import { OwnerInfoForm } from "components/Forms"; 
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
          <Footer />
        </main>
      </AnimationRevealPage>
    </>
  );
};
