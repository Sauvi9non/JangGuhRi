import React from "react";
import "./ShoppingListItem.css";
import DiscardShoppingList from "./DiscardShoppingList.js";

const ShoppingListItem = (props) => {
  console.log("ShoppingListItem");
  console.log(props.data); //배열 데이터 지금은 각각의 것만...

  const boxCheckedHandler = (_check) => {
    console.log("ShoppingListItem");
    console.log(_check);
    props.onDiscardItem(_check);
    }

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
      <DiscardShoppingList onBoxChecked={boxCheckedHandler} id={props.data.id}/>
    </div>
  );
};

export default ShoppingListItem;