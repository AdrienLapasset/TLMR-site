import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "./home/HeroSection";
import VousProteger from "./home/VousProteger";
import NosSolution from "./home/NosSolution";
import VousFormer from "./home/VousFormer";
import ALaUne from "./home/ALaUne";
import VosExperts from "./home/VosExperts";
import VosTemoignages from "./home/VosTemoignages";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <VousProteger />
      <NosSolution />
      <VousFormer />
      <ALaUne />
      <VosExperts />
      <VosTemoignages />
    </Layout>
  );
};

export default IndexPage;
