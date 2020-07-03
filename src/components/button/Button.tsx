import React from "react";
import "./button.scss";

export const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

interface ButtonProps {
  onClick: () => any;
  text: string;
  className?: string;
}
