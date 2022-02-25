import React from "react";
import "../styles/mailBody.css";
import "../styles/main.css";

const CircularLogo = ({ selected = {} }) => {
  return (
    <div className="mail-item-initial">
      {selected?.from?.name[0]?.toUpperCase()}
    </div>
  );
};

export default CircularLogo;
