import * as React from "react";
import Layout from "components/Layout";
import HeroSection from "../components/home/sections/HeroSection";
import VousProteger from "../components/home/sections/VousProteger";
import NosSolution from "../components/home/sections/NosSolution";
import VousFormer from "../components/home/sections/VousFormer";
import ALaUne from "../components/home/sections/ALaUne";
import VosExperts from "../components/home/sections/VosExperts";
import VosTemoignages from "../components/home/sections/VosTemoignages";
import DansLaPresse from "../components/home/sections/DansLaPresse";

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
      <DansLaPresse />
    </Layout>
  );
};

export default IndexPage;
