import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const HomeNavbar = () => (
  <Fragment>
    <Link to="/menu" className="navbar-item has-text-white">
      <i
        className="material-icons"
        style={{ fontSize: "18px", marginRight: "0.3rem" }}
      >
        &#xe561;
      </i>{" "}
      Menu
    </Link>
    <Link to="/location" className="navbar-item has-text-white">
      <i
        className="fas fa-map-marker-alt"
        style={{ marginRight: "0.3rem" }}
      ></i>
      Location
    </Link>
    <Link to="/ourstory" className="navbar-item has-text-white">
      <i className="fas fa-book-open" style={{ marginRight: "0.3rem" }}></i>
      OurStory
    </Link>
    <LinkScroll
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      className="navbar-item has-text-white"
    >
      <i
        className="fas fa-phone-square-alt"
        style={{ marginRight: "0.3rem" }}
      ></i>
      Contact
    </LinkScroll>
    <Link to="/login" className="navbar-item has-text-white">
      <i className="far fa-user-circle fa-2x"></i>
    </Link>
    <Link to="/login" className="navbar-item has-text-white">
      <i className="fa" style={{ fontSize: "25px" }}>
        &#xf290;
      </i>
    </Link>
  </Fragment>
);

const Navbar = () => {
  return (
    <nav
      className="navbar has-background-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <h1 className="title is-4 has-text-white black_han_sans">
            BurgerDen
          </h1>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <HomeNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
