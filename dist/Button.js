import React from "react";
import "./button.scss";
export const Button = ({ onClick, text, className }) => {
    return (React.createElement("button", { className: `btn ${className}`, onClick: onClick }, text));
};
