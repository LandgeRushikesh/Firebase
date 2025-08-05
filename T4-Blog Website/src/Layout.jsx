import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = ({isAuth}) => {
  return (
    <>
      <Navbar isAuth={isAuth} />
      <Outlet />
    </>
  );
};

export default Layout;
