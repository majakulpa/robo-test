import React from "react";
import "./Card.css";

const Card = ({ users }) => {
  return (
    <div>
      <div className="background">{users}</div>
    </div>
  );
};

export default Card;
