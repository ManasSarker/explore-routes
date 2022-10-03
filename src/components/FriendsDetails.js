import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendsDetails = () => {
  const friend = useLoaderData();
  console.log("Asla ki?", friend);

  return (
    <div>
      {/* {userDetails.map((user) => (
        <UserDetails key={user.id} userinfo={user}></UserDetails>
      ))} */}
      <h1>Call him {friend.name}</h1>
    </div>
  );
};

export default FriendsDetails;
