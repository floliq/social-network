import React from "react";
import Post from "./Post";

function Posts(props) {
  return (
    <div className="posts">
      <input placeholder="enter the post" />

      <button>Add post</button>
      <Post message="Hi, world" name={props.name} />
      <Post message="I`m Elon Mask, really" name={props.name} />
      <Post message="Give me some bitcoins" name={props.name} />
    </div>
  );
}

export default Posts;
