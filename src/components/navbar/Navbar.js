import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="profile">Profile</Link>
      <Link to="dialogs">Messages</Link>
      <Link to="users">Users</Link>
    </div>
  );
}
export default Navbar;
