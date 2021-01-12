import React from "react";

const PopularMeals = ({ item }) => {
  return (
    <div className="column is-11">
      <div className="card">
        <div className="card-image has-text-centered">
          <img
            src={item.img}
            alt={item.title}
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="card-content">
          <div className="media-content has-text-centered">
            <h1 className="title is-4">{item.title}</h1>
          </div>
        </div>
        <div
          className="content has-text-centered"
          style={{ padding: "2rem", paddingTop: "0rem" }}
        >
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            massa sagittis, semper purus in, laoreet dolor. Integer eget quam
            sodales, euismod arcu at, elementum quam. Cras pharetra enim eu
            sodales facilisis. Donec tincidunt ante nec arcu sodales, ac
            tristique dolor mollis. Duis ac neque a eros lobortis dictum quis id
            elit.{" "}
          </p>
          <br />
          <div style={{ overflow: "hidden" }}>
            <p className="title is-4" style={{ float: "left" }}>
              R{item.price}
            </p>
            <a href="#none" style={{ float: "right" }}>
              <i className="fas fa-plus-circle"></i> Add to cart
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMeals;
