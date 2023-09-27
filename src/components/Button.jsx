import React from "react";

const Button = ({ children, onClick, className, type }) => {
  const defaultClass =
    "self-center mr-4 bg-slightly-dark-green px-2 rounded-sm text-white font-custom-one my-4";

  return (
    <button
      type={`'' ${type}`}
      onClick={onClick}
      className={`${defaultClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
