import React from "react";
import s from "./Square.module.css";

const Square = ({ cssClass, label }) => {
  return <div className={`${s.square} ${s[cssClass]}`}>{label}</div>;
};

export default Square;
