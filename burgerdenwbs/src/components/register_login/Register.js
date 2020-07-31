import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="hero">
      <div className="hero-body-style">
        <div className="columns">
          <div className="column login-box is-6">
            <Link to="/">
              <i
                className="fas fa-long-arrow-alt-left"
                style={{ marginRight: "0.5rem", fontSize: "17px" }}
              ></i>{" "}
              Back Home
            </Link>
            <form className="field">
              <label className="label form-spacing">Name</label>
              <input type="text" className="input" />
              <label className="label form-spacing">Email</label>
              <input type="email" className="input" />
              <label className="label form-spacing">Password</label>
              <input type="password" className="input" />
              <label className="label form-spacing">Re-type Password</label>
              <input type="password" className="input" />
              <button className="button" style={{ marginTop: "1rem" }}>
                Register
              </button>
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

export default Register;
