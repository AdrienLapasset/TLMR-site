import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "./home/HeroSection";
import VousProteger from "./home/VousProteger";
import NosSolution from "./home/NosSolution";
import VousFormer from "./home/VousFormer";
import ALaUne from "./home/ALaUne";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <VousProteger />
      <NosSolution />
      <VousFormer />
      <ALaUne />
    </Layout>
  );
};

export default IndexPage;
