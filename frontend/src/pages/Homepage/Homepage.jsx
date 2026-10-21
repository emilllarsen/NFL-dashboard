import React from "react";
import Hero from "../../components/Hero/Hero";
import HomepageTeams from "../../components/HomepageTeams/HomepageTeams";
import { Link } from "react-router";
export default function Homepage() {
  return (
    <>
      <Hero />
      <HomepageTeams />
    </>
  );
}
