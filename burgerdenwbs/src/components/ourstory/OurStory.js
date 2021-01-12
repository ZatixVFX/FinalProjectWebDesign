import React, { Fragment } from "react";

import Navbar from "../layout/Navbar";
import Farm from "./sections/Farm";
import Buns from "./sections/Buns";
import Patties from "./sections/Patties";
import Sauces from "./sections/Sauces";
import Footer from "../footer/Footer";

const OurStory = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        <Farm />
        <Buns />
        <Patties />
        <Sauces />
      </section>
      <Footer />
    </Fragment>
  );
};

export default OurStory;
