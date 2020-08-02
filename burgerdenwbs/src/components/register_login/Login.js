import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";

import { setAlert } from "../../actions/alertAction";
import { login, clearErrors } from "../../actions/authAction";

const Login = ({
  alerts,
  auth: { isAuthenticated, error },
  login,
  clearErrors,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "is-danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "is-warning");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <section className="hero is-fullheight form-bg-img">
      <div className="hero-body-style">
        <div className="columns">
          <div
            className="column login-box is-6"
            style={{ backgroundColor: "white" }}
          >
            <Link to="/">
              <i
                className="fas fa-long-arrow-alt-left"
                style={{ marginRight: "0.5rem", fontSize: "17px" }}
              ></i>{" "}
              Back Home
            </Link>
            {alerts.length > 0 &&
              alerts.map((alert) => (
                <div className={`notification ${alert.type} is-light`}>
                  {alert.msg}
                </div>
              ))}
            <form className="field" onSubmit={onSubmit}>
              <label htmlFor="email" className="label form-spacing">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="password" className="label form-spacing">
                Password
              </label>
              <input
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={onChange}
              />
              <button className="button" style={{ marginTop: "1rem" }}>
                Login
              </button>
            </form>
            <p className="subtitle is-6 has-text-info">
              or <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
  auth: state.auth,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
