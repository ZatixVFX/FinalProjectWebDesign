import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBeverages } from "../../../actions/foodItemAction";
import { addToCart } from "../../../actions/cartAction";
import Loading from "../../layout/Loading";

const Beverages = ({
  beverage: { beverages, loading },
  auth: { token },
  getBeverages,
  addToCart,
}) => {
  useEffect(() => {
    getBeverages();
    // eslint-disable-next-line
  }, []);

  const [active, setActive] = useState("");

  const [modalName, setModalName] = useState("");

  const [BVGimg, setBVGimg] = useState("");
  const [BVGtitle, setBVGtitle] = useState("");
  const [BVGprice, setBVGprice] = useState("");

  let filtered = [];

  const closeModal = () => {
    setActive("");
  };

  const filterBVG = (e) => {
    setActive("is-active");
    setModalName(e.target.parentElement.getAttribute("data-target"));

    let burger_Name = e.target.parentElement.getAttribute("href");
    filtered = beverages.filter((item) => {
      return burger_Name === `#${item.title}`;
    });
    filtered.map((item) => {
      setBVGimg(item.img);
      setBVGtitle(item.title);
      setBVGprice(item.price);
    });
  };

  const addItem = () => {
    const item = {
      title: BVGtitle,
      img: BVGimg,
      price: "R" + BVGprice,
    };
    addToCart(token, item);
  };

  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {beverages.map((item) => (
            <a
              href={`#${item.title}`}
              key={item.id}
              style={{
                width: "221px",
                height: "200px",
                paddingTop: "1rem",
              }}
              onClick={filterBVG}
              data-target={item.title}
            >
              <img
                src={item.img}
                alt={item.title}
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
                    <img src={BVGimg} alt={BVGtitle} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <h1
                      className="title is-4"
                      style={{ paddingLeft: "12.5rem" }}
                    >
                      {BVGtitle}
                    </h1>
                  </div>
                  <div className="content is-flex">
                    <h2 className="title is-5 modal-card-price">R{BVGprice}</h2>
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

Beverages.propTypes = {
  getBeverages: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  beverage: state.beverage,
  auth: state.auth,
});

export default connect(mapStateToProps, { addToCart, getBeverages })(Beverages);
