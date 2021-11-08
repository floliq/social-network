import React from "react";
import ava_min from "../../../img/elon.jpg";

function Post(props) {
  return (
    <div className="post">
      <img src={ava_min} alt="profile mini photo" />

      <span>{props.name}</span>

      <p>{props.message}</p>
    </div>
  );
}

export default Post;
