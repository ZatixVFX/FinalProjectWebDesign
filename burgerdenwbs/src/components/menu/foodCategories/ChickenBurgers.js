import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getChickenBurgers } from "../../../actions/foodItemAction";
import Loading from "../../layout/Loading";

const ChickenBurgers = ({
  chickenburger: { chickenburgers, loading },
  getChickenBurgers,
}) => {
  useEffect(() => {
    getChickenBurgers();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="columns">
      {loading ? (
        <Loading />
      ) : (
        <div className="column is-10" style={gridstyle}>
          {chickenburgers.map((item) => (
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

ChickenBurgers.propTypes = {
  chickenburgers: PropTypes.object.isRequired,
  getChickenBurgers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  chickenburger: state.chickenburger,
});

export default connect(mapStateToProps, { getChickenBurgers })(ChickenBurgers);
