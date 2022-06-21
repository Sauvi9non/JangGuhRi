import React, {useState} from "react";
import "./ShoppingList.css";
import AddShoppingList from "./AddShoppingList";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
  const [items, setItems] = useState(props._items);
  console.log("ShoppingList.js App에서 props로 받은 데이터들 확인")
  console.log(props._items);

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
            key={item.id}
          />
        )
      }

    </div>
  );
};

export default ShoppingList;
