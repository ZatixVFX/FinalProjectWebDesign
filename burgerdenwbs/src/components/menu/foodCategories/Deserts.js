import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getDeserts } from "../../../actions/foodItemAction";
import { addToCart } from "../../../actions/cartAction";
import Loading from "../../layout/Loading";

const Deserts = ({
  desert: { deserts, loading },
  auth: { token },
  getDeserts,
  addToCart,
}) => {
  useEffect(() => {
    getDeserts();
    // eslint-disable-next-line
  }, []);

  const [active, setActive] = useState("");

  const [modalName, setModalName] = useState("");

  const [DTSimg, setDTSimg] = useState("");
  const [DTStitle, setDTStitle] = useState("");
  const [DTSprice, setDTSprice] = useState("");

  let filtered = [];

  const closeModal = () => {
    setActive("");
  };

  const filterDTS = (e) => {
    setActive("is-active");
    setModalName(e.target.parentElement.getAttribute("data-target"));

    let burger_Name = e.target.parentElement.getAttribute("href");
    filtered = deserts.filter((item) => {
      return burger_Name === `#${item.title}`;
    });
    filtered.map((item) => {
      setDTSimg(item.img);
      setDTStitle(item.title);
      setDTSprice(item.price);
    });
  };

  const addItem = () => {
    const item = {
      title: DTStitle,
      img: DTSimg,
      price: "R" + DTSprice,
    };
    addToCart(token, item);
  };

  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {deserts.map((item) => (
            <a
              href={`#${item.title}`}
              key={item.id}
              style={{
                width: "221px",
                height: "200px",
                paddingTop: "1rem",
              }}
              onClick={filterDTS}
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
                    <img src={DTSimg} alt={DTStitle} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <h1
                      className="title is-4"
                      style={{ paddingLeft: "12.5rem" }}
                    >
                      {DTStitle}
                    </h1>
                  </div>
                  <div className="content is-flex">
                    <h2 className="title is-5 modal-card-price">R{DTSprice}</h2>
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

Deserts.propTypes = {
  getDeserts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  desert: state.desert,
  auth: state.auth,
});

export default connect(mapStateToProps, { addToCart, getDeserts })(Deserts);
