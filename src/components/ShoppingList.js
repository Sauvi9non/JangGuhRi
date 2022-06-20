import React from "react";
import "./ShoppingList.css";
import AddShoppingList from "./AddShoppingList";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
  return (
    <div className="shoppinglist">
      <div className="shoppinglist__title">
      <span className="shoppinglist__title name">
        Shopping List
      </span>
        </div>
      
      <ShoppingListItem
        product={props._items[0].product}
        quantity={props._items[0].quantity}
      />
      <ShoppingListItem
        product={props._items[1].product}
        quantity={props._items[1].quantity}
      />
      <ShoppingListItem
        product={props._items[2].product}
        quantity={props._items[2].quantity}
      />
    </div>
  );
};

export default ShoppingList;
