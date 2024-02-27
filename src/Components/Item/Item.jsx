import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <div className="item-details">
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};
export default Item;