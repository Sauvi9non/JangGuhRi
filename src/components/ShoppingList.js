import React, {useState} from "react";
import "./ShoppingList.css";
import AddShoppingList from "./AddShoppingList";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
  const [items, setItems] = useState(props._items);
  /*console.log("ShoppingList.js App에서 props로 받은 데이터들 확인")
  console.log(props._items);*/

  const discardItemHandler = (recheck) => {
    console.log("이곳은 ShoppingList");
    console.log(recheck);
    props.onGetRidOf(recheck);
  }

  return (
    <div className="shoppinglist">
      <div className="shoppinglist__title">
      <span className="shoppinglist__title name">
        Shopping List
      </span>
      </div>
      {
        props._items.map( (item) => 
          <ShoppingListItem 
            product={item.product} quantity={item.quantity}
            key={item.id} data={item} onDiscardItem={discardItemHandler}
          />
        )
      }
    </div>
  );
};

export default ShoppingList;
