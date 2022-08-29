import React from "react";

const ButtonDefault = ({ text, children, className, onClick, disabled }) => {
  return (
    <button
      className={`text-white uppercase rounded-md py-2 px-8 bg-gradient-to-r from-primary to-secondary border-2 border-transparent hover:from-transparent hover:to-transparent hover:text-primary hover:border-primary duration-300 transition-all ${className} ${
        disabled &&
        "hover:bg-gray-400 from-gray-400 to-gray-400 cursor-disabled text-white hover:text-white border-none"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

export default ButtonDefault;
