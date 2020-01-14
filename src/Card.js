import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div>
      <div className="background">{user}</div>
    </div>
  );
};

export default Card;
