import React from "react";

const FindUs = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-header has-text-centered">
        <h1 className="title">Visit us</h1>
      </div>
      <div className="hero-body hero-body-style is-flex">
        <figure className="image">
          <img
            src="https://png2.cleanpng.com/sh/03068d4e31c8d5c854a0e7aa8aa5fdcc/L0KzQYm3VMA6N5tqj5H0aYP2gLBuTfhidZN6itlucj3lhcX7jB4ubqNujNd7aXWwdsPsjvNpNZd3gdd8LXPrdbb6hfJ2ephqRdRAcnfogn7ojvQue5JzfOlyY3iwRbLqgfY5O5c4TaltZkexRYm4WMQ1PWI2TaQ8MkW0Qoe6UsE6OV91htk=/kisspng-hamburger-button-friterie-french-fries-cheeseburge-burger-and-sandwich-5acaf83f357df7.5818445115232512632191.png"
            alt=""
            style={{ width: "400px", height: "400px" }}
          />
        </figure>
        <div className="columns">
          <div
            className="column is-9-desktop is-12 is-offset-3 has-text-left"
            style={{ padding: "5.75rem", paddingLeft: "0rem" }}
          >
            <p className="subtitle is-3">
              {" "}
              We are situated at all provinces in South Africa
            </p>
            <br />
            <button className="button">Find Location</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
