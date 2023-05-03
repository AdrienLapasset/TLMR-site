import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "./home/HeroSection";
import VousProteger from "./home/VousProteger";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <VousProteger />
    </Layout>
  );
};

export default IndexPage;
