import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="columns">
        <div
          className="column"
          style={{ padding: "0.75rem", paddingTop: "3.3rem" }}
        >
          <h1 className="title is-4 black_han_sans has-text-centered">
            BurgerDen
          </h1>
        </div>
        <div className="column">
          <h1 className="title is-5">Contact us:</h1>
          <ul>
            <li>
              <i
                className="fas fa-phone fa-1x"
                style={{ marginRight: "1rem" }}
              ></i>{" "}
              0678293301
            </li>
            <li>
              <i
                className="far fa-envelope fa-1x"
                style={{ marginRight: "1rem" }}
              ></i>{" "}
              Customercare@Burgerden.co.za
            </li>
            <li>
              <i
                className="fas fa-fax fa-1x"
                style={{ marginRight: "1rem" }}
              ></i>{" "}
              0678293801
            </li>
          </ul>
        </div>
        <div className="column">
          <h1 className="title is-5">Follow us:</h1>
          <div className="container">
            <a href="#none">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="#none">
              <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href="#none">
              <i className="fab fa-youtube-square fa-2x"></i>
            </a>
            <a href="#none">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container has-text-centered">
        <p className="subtitle is-6">
          TM & © 2020 BurgerDen Corporation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
