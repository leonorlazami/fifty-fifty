import React from "react";

const Button = ({ children, onClick, className, type }) => {
  // Define a default class for the button
  const defaultClass =
    "self-center mr-4 bg-slightly-dark-green px-2 rounded-sm text-white font-custom-one my-4";

  return (
    <button
      type={`'' ${type}`}
      onClick={onClick}
      className={`${defaultClass} ${className}`} // Merge the default class with the provided className
    >
      {children}
    </button>
  );
};

export default Button;
