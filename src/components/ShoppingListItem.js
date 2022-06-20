import React from "react";
import "./ShoppingListItem.css";

const ShoppingListItem = (props) => {
  return (
    <div className="shoppinglist__item">
      <div className="shoppinglist__item__product">
        {console.log(props.product)}
        {props.product}
      </div>
      <div className="shoppinglist__item__quantity">
        {console.log(props.quantity)}
        {props.quantity}
      </div>
    </div>
  );
};

export default ShoppingListItem;
