import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getBeefBurgers } from "../../actions/foodItemAction";
import Navbar from "../layout/Navbar";
import PopularMeals from "./PopularMeals";
import Loading from "../layout/Loading";

const Home = ({ beefburger: { beefburgers, loading }, getBeefBurgers }) => {
  useEffect(() => {
    getBeefBurgers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <section className="hero is-medium">
        <div
          className="hero-body has-background-warning"
          style={{
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            paddingBottom: "0rem",
            paddingTop: "0rem",
          }}
        >
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <img
                src="https://mcdn.wallpapersafari.com/medium/25/35/08QE74.jpg"
                alt="solid blue background"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>

            <div className="column"></div>
          </div>
        </div>
        <div className="hero is-fullheight">
          <div className="hero-header has-text-centered">
            <h1 className="title">Popular meals</h1>
          </div>
          <div className="hero-body">
            {loading ? (
              <Loading />
            ) : (
              beefburgers.map((item) => <p key={item.id}>{item.title}</p>)
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Home.propTypes = {
  beefburger: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  beefburger: state.beefburger,
});

export default connect(mapStateToProps, { getBeefBurgers })(Home);
