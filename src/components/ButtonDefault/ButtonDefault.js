import React from "react";

const ButtonDefault = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={`border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase ${className} ${disabled && "bg-gray-400 text-mute hover:bg-gray-400 cursor-disabled text-white border-none"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;