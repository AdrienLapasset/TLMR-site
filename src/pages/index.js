import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "./home/sections/HeroSection";
import VousProteger from "./home/sections/VousProteger";
import NosSolution from "./home/sections/NosSolution";
import VousFormer from "./home/sections/VousFormer";
import ALaUne from "./home/sections/ALaUne";
import VosExperts from "./home/sections/VosExperts";
import VosTemoignages from "./home/sections/VosTemoignages";

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
