import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadUser } from "../../actions/authAction";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = ({ auth: { isAuthenticated }, loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const HomeNavbar = () => (
    <Fragment>
      <Link to="/" className="navbar-item has-text-white">
        <i className="fas fa-home" style={{ marginRight: "0.3rem" }}></i>
        Home
      </Link>
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
      {isAuthenticated ? (
        <div className="navbar-item dropdown is-hoverable">
          <div className="dropdown-trigger line-height">
            <a
              className="navbar-item far fa-user-circle fa-2x user-authenticated"
              aria-haspopup="true"
              aria-controls="dropdown-menu-1"
            ></a>
          </div>
          <div className="dropdown-menu" id="dropdown-menu-1" role="menu">
            <Link className="dropdown-item has-text-white dropdown-style">
              Account
            </Link>
            <Link className="dropdown-item has-text-white dropdown-style">
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/login" className="navbar-item has-text-white">
          <i className="far fa-user-circle fa-2x"></i>
        </Link>
      )}

      <Link to="/cart" className="navbar-item has-text-white">
        <i className="fa" style={{ fontSize: "25px" }}>
          &#xf290;
        </i>
      </Link>
    </Fragment>
  );

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

Navbar.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Navbar);
