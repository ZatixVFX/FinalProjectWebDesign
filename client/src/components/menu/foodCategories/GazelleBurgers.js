import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getGazelleBurgers } from "../../../actions/foodItemAction";
import Loading from "../../layout/Loading";

const GazelleBurgers = ({
  gazelleburger: { gazelleburgers, loading },
  getGazelleBurgers,
}) => {
  useEffect(() => {
    getGazelleBurgers();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {gazelleburgers.map((item) => (
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

GazelleBurgers.propTypes = {
  gazelleburgers: PropTypes.object.isRequired,
  getGazelleBurgers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gazelleburger: state.gazelleburger,
});

export default connect(mapStateToProps, { getGazelleBurgers })(GazelleBurgers);
