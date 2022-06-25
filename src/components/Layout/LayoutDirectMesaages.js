import React from "react";
import { Outlet } from "react-router-dom";
import DirectMessageContent from "../Main/DirectMessageContent/DirectMessageContent";

function LayoutDirectMesaages(props) {
  return (
    <>
      <div className="main">
        <DirectMessageContent />
      </div>
      <div className="left-sidebar">
        <Outlet />
      </div>
    </>
  );
}

export default LayoutDirectMesaages;
