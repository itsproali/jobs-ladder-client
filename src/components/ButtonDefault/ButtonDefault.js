import React from "react";
import "./ButtonDefault.css";

const ButtonDefault = ({ text, children, className, onClick, disabled }) => {
  return (
    <button
      className={`gradient-button py-3 px-8 ${className} ${
        disabled && "disable-button "
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default ButtonDefault;
