import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getSides } from "../../../actions/foodItemAction";
import Loading from "../../layout/Loading";

const Sides = ({ side: { sides, loading }, getSides }) => {
  useEffect(() => {
    getSides();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {sides.map((item) => (
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

Sides.propTypes = {
  sides: PropTypes.object.isRequired,
  getSides: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  side: state.side,
});

export default connect(mapStateToProps, { getSides })(Sides);
