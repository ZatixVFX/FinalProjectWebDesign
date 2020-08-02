import React, { Fragment } from "react";

import Navbar from "../layout/Navbar";
import LocationItem from "./LocationItem";
import Footer from "../footer/Footer";

const Location = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        <div className="hero-body-style-loaction has-text-centered">
          <h1 className="title is-2">Locations</h1>
          <p className="subtitle is-5 location-subtitle-color">
            We are situated at all provinces in South Africa
          </p>
          <form className="field">
            <div className="control is-inline-flex">
              <input
                type="text"
                className="input"
                placeholder="Search Location..."
              />
              <button className="button">
                <i class="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="hero-body-location-items">
          <LocationItem />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Location;
