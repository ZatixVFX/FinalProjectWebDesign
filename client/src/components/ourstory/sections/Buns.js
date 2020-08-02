import React from "react";

import Picture from "../../../resources/images/Buns.jpg";

const Buns = () => {
  return (
    <div className="hero-body-ourstory-1 is-flex">
      <div className="columns">
        <div className="column">
          <h1 className="title is-3 has-text-left">Our Buns</h1>
          <p className="subtitle is-5 font-size-desktop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            massa sagittis, semper purus in, laoreet dolor. Integer eget quam
            sodales, euismod arcu at, elementum quam. Cras pharetra enim eu
            sodales facilisis. Donec tincidunt ante nec arcu sodales, ac
            tristique dolor mollis. Duis ac neque a eros lobortis dictum quis id
            elit.{" "}
          </p>
        </div>
      </div>
      <figure className="image">
        <img
          src={Picture}
          alt="Buns-img"
          className="img-style-buns img-style-desktop"
        />
      </figure>
    </div>
  );
};

export default Buns;
