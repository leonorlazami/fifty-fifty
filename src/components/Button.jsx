import React from "react";

const Button = ({ children, onClick, className, type }) => {
  const defaultClass =
    "bg-gradient-to-r from-violet-500 via-violet-600 to-secondary rounded-2xl w-full py-2 font-bold text-primary";

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
