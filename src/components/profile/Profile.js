import React from "react";
import "./profile.css";
import ava from "../../img/elon.jpg";
import Posts from "./posts/Posts";

function Profile(props) {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="profile mini photo" />

        <p>{props.name}</p>
      </div>
      <Posts message={props.message} name={props.name} />
    </div>
  );
}
export default Profile;
