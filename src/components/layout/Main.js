import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <h1>This will be common </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
