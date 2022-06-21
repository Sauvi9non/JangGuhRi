import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import NewShoppingList from "./components/NewShoppingList";

const example = [
  {
    id: Math.random().toString(),
    product: "Ground beef",
    quantity: 1,
  },
  {
    id: Math.random().toString(),
    product: "Zucchini",
    quantity: 3,
  },
  {
    id: Math.random().toString(),
    product: "Bella mushroom",
    quantity: 1,
  },
];

function App() {

  const [item, setItem] = useState(example); //여기서 상태 관리, 배열에 값 추가하고...

  const addItemHandler = (newItem) => {
    /*여기서 그 이전 상태 기반으로 하는 state */
    /* 위에 배열에 추가!*/
    console.log("App.js");
    console.log({ newItem });

    /* 이전 상태를 기반으로 하는 업데이트 */ 
    setItem( (example) => {
      return [newItem, ...example]
    }
    );
    console.log({ item });
  };

  const GetRidOfThis = (targetID) => {
    /*item에서  값 삭제*/
    console.log("target이 사라집니다.");
    console.log(item);
    const a = item.filter( item => (item.id!==targetID));
    setItem(a);
    
  }
  return (
    <div className="shoppinglist">
      <ShoppingList _items={item} onGetRidOf={GetRidOfThis}/>
      <NewShoppingList onAddItem={addItemHandler} />
    </div>
  );
}

export default App;
