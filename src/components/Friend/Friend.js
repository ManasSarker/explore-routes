import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  return (
    <div className="friend">
      <h1>{name}</h1>
      <p>{email}</p>
      <Link to={`/friends/${id}`}>{username}</Link>
    </div>
  );
};

export default Friend;
