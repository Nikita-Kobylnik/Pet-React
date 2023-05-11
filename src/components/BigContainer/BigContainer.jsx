import React from "react";
import "./BigContainer.scss";

const BigContainer = ({ children }) => {
  return (
    <div className="big-container" id="cont">
      {children}
    </div>
  );
};

export default BigContainer;
