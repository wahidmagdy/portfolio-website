import React from "react"

import Layout from "../components/layout"
import HomeSection from "../components/HomeSection"
import SkillsSection from "../components/SkillsSection"
import PortfolioSection from "../components/PortfolioSection"



export default () => {

  return <Layout>
    <HomeSection/>
    <SkillsSection/>
    <PortfolioSection/>
  </Layout>
}