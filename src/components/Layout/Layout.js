import React from "react";
import { Outlet } from "react-router-dom";
import MainGeneral from "../Main/MainGeneral";

function Layout(props) {
  return (
    <>
      <div className="main">
        <MainGeneral />
      </div>
      <div className="left-sidebar">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
