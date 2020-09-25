import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getGazelleBurgers } from "../../../actions/foodItemAction";
import { addToCart } from "../../../actions/cartAction";
import Loading from "../../layout/Loading";

const GazelleBurgers = ({
  gazelleburger: { gazelleburgers, loading },
  auth: { token },
  getGazelleBurgers,
  addToCart,
}) => {
  useEffect(() => {
    getGazelleBurgers();
    // eslint-disable-next-line
  }, []);

  const [active, setActive] = useState("");

  const [modalName, setModalName] = useState("");

  const [BRGimg, setBRGimg] = useState("");
  const [BRGtitle, setBRGtitle] = useState("");
  const [BRGprice, setBRGprice] = useState("");

  let filtered = [];

  const closeModal = () => {
    setActive("");
  };

  const filterBFB = (e) => {
    setActive("is-active");
    setModalName(e.target.parentElement.getAttribute("data-target"));

    let burger_Name = e.target.parentElement.getAttribute("href");
    filtered = gazelleburgers.filter((item) => {
      return burger_Name === `#${item.title}`;
    });
    filtered.map((item) => {
      setBRGimg(item.img);
      setBRGtitle(item.title);
      setBRGprice(item.price);
    });
  };

  const addItem = () => {
    const item = {
      title: BRGtitle,
      img: BRGimg,
      price: "R" + BRGprice,
    };
    addToCart(token, item);
  };

  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {gazelleburgers.map((item) => (
            <a
              href={`#${item.title}`}
              key={item.id}
              style={{
                width: "221px",
                height: "200px",
                paddingTop: "1rem",
              }}
              onClick={filterBFB}
              data-target={item.title}
            >
              <img
                src={item.img}
                alt={item.title}
                className="on-hover-effect"
                style={{ width: "100%", height: "100%" }}
              />
              <p className="has-text-centered">{item.title}</p>
            </a>
          ))}
        </div>
      )}

      <div className={`modal ${active}`} id={modalName}>
        <div className="modal-background"></div>
        <div
          className="modal-content"
          style={{
            borderRadius: "29px",
            maxHeight: "calc(100vh - 1px)",
            position: "unset",
          }}
        >
          <div className="columns">
            <div className="column is-12" style={{ padding: "0rem" }}>
              <div className="card">
                <div className="card-image">
                  <figure className="image card-img-size">
                    <img src={BRGimg} alt={BRGtitle} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <h1
                      className="title is-4"
                      style={{ paddingLeft: "12.5rem" }}
                    >
                      {BRGtitle}
                    </h1>
                  </div>
                  <div className="content is-flex">
                    <h2 className="title is-5 modal-card-price">R{BRGprice}</h2>
                    <a href="" className="modal-add-cart-btn" onClick={addItem}>
                      <i className="fas fa-plus-circle"></i>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

GazelleBurgers.propTypes = {
  getGazelleBurgers: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gazelleburger: state.gazelleburger,
  auth: state.auth,
});

export default connect(mapStateToProps, { addToCart, getGazelleBurgers })(
  GazelleBurgers
);
