import React, { Fragment } from "react";

import Navbar from "../layout/Navbar";
import BeefBurgers from "./foodCategories/BeefBurgers";
import ChickenBurgers from "./foodCategories/ChickenBurgers";
import GazelleBurgers from "./foodCategories/GazelleBurgers";
import Beverages from "./foodCategories/Beverages";
import Deserts from "./foodCategories/Deserts";
import HotDrinks from "./foodCategories/HotDrinks";
import Sides from "./foodCategories/Sides";
import Footer from "../footer/Footer";

const Menu = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        {/* Beef Burgers */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Beef Burgers</h1>
          <BeefBurgers />
        </div>
        {/* Chicken Burgers */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Chicken Burgers</h1>
          <ChickenBurgers />
        </div>
        {/* Gazelle Burgers */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Gazelle Burgers</h1>
          <GazelleBurgers />
        </div>
        {/* Beverages */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Beverages</h1>
          <Beverages />
        </div>
        {/* Deserts */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Deserts</h1>
          <Deserts />
        </div>
        {/* Hot Drinks */}
        <div className="hero-body hero-body-food-categories">
          <h1 className="title is-3">Hot Drinks</h1>
          <HotDrinks />
        </div>
        {/* Sides */}
        <div className="hero-body hero-body-food-category-sides">
          <h1 className="title is-3">Sides</h1>
          <Sides />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Menu;
