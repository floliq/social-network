import React from "react";
import ava from "../../../img/elon_mini.jpg";

function ProfileInfo(props) {
  return (
    <div ClassName="me">
      <img src={ava} alt="my photo" />

      <p> Elon Mask </p>
    </div>
  );
}
export default ProfileInfo;
