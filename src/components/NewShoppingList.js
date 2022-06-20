
import React, {useState} from "react";
import AddShoppingList from "./AddShoppingList.js";
//import "./NewShoppingList.css";
/*이 컴포넌트는 그저 AddshppingList를 감싸는 컴포넌트 입니다. */

const NewShoppingList = (props) => {
    const addShoppingListHandler = (enteredNewItem) => {
        /*쇼핑리스트가 추가되어서 호출되었다(속성이름이 onAddshoppingList 쇼핑리스트가 추가되었을 떄).
        이 함수는 무슨 일을 해야할까
        궁극적인 목표는, 새로 추가한 쇼핑목록데이터를 newShoppinglist로 가져다두는것.
        왜 가져다두지? 쇼핑리스트에 새로 추가해야하니까
        */
        const newItem = { /*새로 추가된 항목을 추가한다 스프레드 연산자로 기존거 복사하고, 추가. 아냐? */
            id: Math.random().toString(),
            ...enteredNewItem,
        }

        console.log("NewShoppingList 입니다.");    
        console.log({newItem});
        props.onAddItem(newItem);
    }
    
    return(
        <div>
            <AddShoppingList onAddShoppingList={addShoppingListHandler}/>
            {/* 쇼핑리스트가 추가되었을 때 발생하는 함수 호출 
            상태 끌어올리기에서 state와 이벤트와 props을 적절히 사용하는데. input태그에서 onChange이벤트가 발생하면 state를 저장하는 거랑 비슷하다고...
            */}

        </div>
    )
}

export default NewShoppingList;

/*


상태 끌어올리는 거는 prop과 이벤트를 이용해서, 함수 호출해서.
                    App (사용자가 보는 화면)
                    |
shoppinglist(Item들 모아서 딱 하나로 렌더링) -------------NewShoppingList  (새로운 쇼핑목록, 이전 값에다가 새로운 값 추가)
|                             |     
shoppinglistitem (쇼핑 목록들 값 하나씩 여기로)        addshoppinglist (이름처럼 새로운 값을 입력만 한다.)

*/