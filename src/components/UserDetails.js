import React from "react";

const UserDetails = (userinfo) => {
  const { name } = userinfo;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default UserDetails;
