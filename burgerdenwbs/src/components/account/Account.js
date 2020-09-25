import React from "react";
import { connect } from "react-redux";

import { useHistory, Link } from "react-router-dom";
import UserImg from "../../resources/images/user.jpg";

const Account = ({ auth: { user } }) => {
  let date_1 = new Date(user.date);
  let dateCreated =
    date_1.getFullYear() +
    "-" +
    (date_1.getMonth() + 1) +
    "-" +
    date_1.getDate();

  return (
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="card">
          <div className="card-image">
            <figure className="image profile-Img-Size">
              <img src={UserImg} alt="Picture of user" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <h1 className="title is-3">{user.name}</h1>
              </div>
            </div>
            <div className="content">
              <h2 className="title is-5">Account Details</h2>
              <h3 className="title is-6">Email: {user.email}</h3>
              <h4 className="title is-6">Date created: {dateCreated}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatToProps, null)(Account);
