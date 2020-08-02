import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getHotDrinks } from "../../../actions/foodItemAction";
import Loading from "../../layout/Loading";

const HotDrinks = ({ hotdrink: { hotdrinks, loading }, getHotDrinks }) => {
  useEffect(() => {
    getHotDrinks();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {hotdrinks.map((item) => (
            <a
              href="#none"
              key={item.id}
              style={{
                width: "221px",
                height: "200px",
                paddingTop: "1rem",
              }}
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
    </div>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

HotDrinks.propTypes = {
  hotdrinks: PropTypes.object.isRequired,
  getHotDrinks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hotdrink: state.hotdrink,
});

export default connect(mapStateToProps, { getHotDrinks })(HotDrinks);
