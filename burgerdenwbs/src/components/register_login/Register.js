import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { setAlert } from "../../actions/alertAction";
import { register, loadUser, clearErrors } from "../../actions/authAction";

const Register = ({
  alerts,
  setAlert,
  register,
  loadUser,
  auth: { isAuthenticated, error },
  clearErrors,
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      loadUser();
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
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "is-danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "is-danger");
    } else {
      register({
        name,
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
              <label htmlFor="name" className="label form-spacing">
                Name
              </label>
              <input
                type="text"
                className="input"
                name="name"
                value={name}
                onChange={onChange}
              />
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
                minLength={7}
              />
              <label htmlFor="password2" className="label form-spacing">
                Re-type Password
              </label>
              <input
                type="password"
                className="input"
                name="password2"
                value={password2}
                onChange={onChange}
              />
              <input type="submit" className="button mt-3" value="Register" />
            </form>
            <p className="subtitle is-6 has-text-info">
              <Link to="/login">Already a member? Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  setAlert,
  register,
  loadUser,
  clearErrors,
})(Register);
