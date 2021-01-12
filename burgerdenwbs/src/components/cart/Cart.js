import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { delCartItem } from "../../actions/cartAction";

import Navbar from "../layout/Navbar";

const Cart = ({
  auth: { token, isAuthenticated },
  cart: { cart },
  delCartItem,
}) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const delItem = (e) => {
    let foodItem = e.target.getAttribute("ping");
    delCartItem(token, foodItem);
    window.location.reload(false);
  };

  const Order = () => {
    if (cart.length == 0) {
      return <h2 className="title is-5">Cart empty</h2>;
    } else {
      return (
        <div className="columns">
          <div className="column">
            {cart.map((item, index) => (
              <div className="container">
                <div className="columns">
                  <div className="column" key={index}>
                    <figure className=" order-img">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-order-style"
                      />
                    </figure>
                  </div>
                  <div className="column is-7">
                    <p className="is-flex">
                      {item.title}{" "}
                      <p className="has-text-black has-text-right ml-3">
                        {item.price}{" "}
                      </p>
                      <input
                        type="number"
                        defaultValue={1}
                        max={10}
                        className="input is-flex is-small ml-3"
                        style={{ width: "15%" }}
                      />
                      <a
                        href={`#${item._id}`}
                        className="fas fa-backspace fa-1x ml-3"
                        style={{ marginTop: "0.35rem" }}
                        ping={item._id}
                        onClick={delItem}
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column order-summary-style is-offset-1">
            <div className="container" style={{ padding: "2rem 1rem" }}>
              <h1 className="title is-4 has-text-left">Order Summary</h1>
              <div className="container items-summary">
                {cart.map((item, index) => (
                  <div className="columns">
                    <div className="column" key={index}>
                      <p className="subtitle is-7 is-flex">{item.title}</p>
                    </div>
                    <div className="column">
                      <p
                        className=" is-7 has-text-black"
                        style={{ marginLeft: "12.5rem" }}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
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
      );
    }
  };
  return (
    <Fragment>
      <Navbar />
      {!isAuthenticated ? (
        <div className="container has-text-centered">Not logged in...</div>
      ) : (
        <section className="hero is-medium">
          <div
            className="hero-header has-text-centered"
            style={{ paddingTop: "2rem" }}
          >
            <h1 className="title is-1">Order</h1>
          </div>
          <div className="hero-body-order">
            <Order />
          </div>
        </section>
      )}
    </Fragment>
  );
};

Cart.propTypes = {
  delCartItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
});

export default connect(mapStateToProps, { delCartItem })(Cart);
