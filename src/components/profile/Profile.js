import React from "react";
import "./profile.css";
import ava from "../../img/elon.jpg";
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className="profile">
      <ProfileInfo />
      <Posts message={props.message} name={props.name} />
    </div>
  );
}
export default Profile;
