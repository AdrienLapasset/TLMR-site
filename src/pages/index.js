import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "./home/HeroSection";
import VousProteger from "./home/VousProteger";
import NosSolution from "./home/NosSolution";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <VousProteger />
      <NosSolution />
    </Layout>
  );
};

export default IndexPage;
