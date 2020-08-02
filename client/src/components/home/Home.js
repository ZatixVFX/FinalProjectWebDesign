import React, { Fragment } from "react";

import Navbar from "../layout/Navbar";
import PopularMeals from "./PopularMeals";
import PopularMealItems from "./PopularMealItems";
import FindUs from "./FindUs";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        <div
          className="hero-body has-background-warning"
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            paddingBottom: "0rem",
            paddingTop: "0rem",
          }}
        >
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <img
                src="https://mcdn.wallpapersafari.com/medium/25/35/08QE74.jpg"
                alt="solid blue background"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>

            <div className="column"></div>
          </div>
        </div>
        <div className="hero is-fullheight">
          <div
            className="hero-header has-text-centered"
            style={{ paddingTop: "4rem" }}
          >
            <h1 className="title">Popular meals</h1>
          </div>
          <div
            className="hero-body hero-body-style"
            style={{ padding: "9rem 5rem" }}
          >
            <div className="columns" style={gridstyle}>
              {PopularMealItems.map((item) => (
                <PopularMeals item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <FindUs />
      <Footer />
    </Fragment>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Home;
