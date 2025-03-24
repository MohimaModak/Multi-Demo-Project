import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./assets/Component/Home/Home";
import Footer from "./assets/Component/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Home></Home>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};
export default Root;
