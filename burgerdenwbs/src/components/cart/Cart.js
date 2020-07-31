import React, { Fragment } from "react";

import Navbar from "../layout/Navbar";
import FoodItems from "../home/PopularMealItems";

const Cart = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        <div
          className="hero-header has-text-centered"
          style={{ paddingTop: "2rem" }}
        >
          <h1 className="title is-1">Order</h1>
        </div>
        <div className="hero-body-style">
          <div className="columns">
            <div className="column">
              {FoodItems.map((item) => (
                <div className="container is-flex">
                  <figure className="image" style={{ width: "197.51px" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: "48%", height: "75%" }}
                    />
                  </figure>
                  <p className="is-inline-flex">
                    {item.title}{" "}
                    <p className="has-text-black has-text-right ml-3">
                      R{item.price}{" "}
                    </p>
                  </p>
                  <input
                    type="number"
                    defaultValue={1}
                    max={10}
                    min={9}
                    className="input is-small ml-3"
                    style={{ width: "10%" }}
                  />
                </div>
              ))}
            </div>
            <div className="column order-summary-style is-offset-1">
              <div className="container" style={{ padding: "2rem 1rem" }}>
                <h1 className="title is-4 has-text-left">Order Summary</h1>
                <div className="container items-summary">
                  <div className="is-inline-flex">
                    <div style={{ width: "77px" }}>
                      <p className="subtitle is-7">Chicken Burger</p>
                    </div>
                    <div>
                      <p
                        className=" is-7 has-text-black"
                        style={{ marginLeft: "12.5rem" }}
                      >
                        R25
                      </p>
                    </div>
                  </div>

                  <br />
                  <div className="is-inline-flex">
                    <div style={{ width: "77px" }}>
                      {" "}
                      <p className="subtitle is-7">Beef Burger</p>
                    </div>
                    <div>
                      <p
                        className=" is-7 has-text-black"
                        style={{ marginLeft: "12.5rem" }}
                      >
                        R25
                      </p>
                    </div>
                  </div>

                  <br />
                  <div className="is-inline-flex">
                    <div style={{ width: "77px" }}>
                      <p className="subtitle is-7">Gazelle Burger </p>
                    </div>
                    <div>
                      <p
                        className=" is-7 has-text-black"
                        style={{ marginLeft: "12.5rem" }}
                      >
                        R25
                      </p>
                    </div>
                  </div>
                </div>
                <div className="is-inline-flex mt-3 mb-3">
                  <div>
                    <h1 className="title is-4">Total</h1>
                  </div>
                  <div>
                    <p className="title is-4" style={{ marginLeft: "14.5rem" }}>
                      R75
                    </p>
                  </div>
                </div>

                <div className="is-flex">
                  <input
                    type="text"
                    className="input is-small"
                    style={{ width: "40%" }}
                  />
                  <button className="button has-text-success is-small">
                    Add Coupon
                  </button>
                </div>
                <button className="button has-background-success mt-3">
                  Checkout
                </button>
                <p className="is-5">We accept the following:</p>
                <i className="fab fa-cc-visa fa-2x mr-3"></i>
                <i className="fab fa-cc-paypal fa-2x mr-3"></i>
                <i className="fab fa-cc-mastercard fa-2x mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cart;
