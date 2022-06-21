import React, {useState} from "react";
import "./DiscardShoppingList.css";
/* 체크박스가 클릭되면 아이템이 삭제된다.
DISCARD라는 value를 app까지 보내서, app에서 데이터 배열을 재정비한다.
*/
const DiscardShoppingList = (props) => {
  const [check, setCheck] = useState('');

    const discardBoxHandler = (event) => {
        console.log("discardbox가 눌렸습니다.");
        setCheck(event.target.value);
        props.onBoxChecked(check);
    }
  return (
    <div className="get-rid-of-shoppinglist">
      <input type="checkbox" name="complete" value={props.id} onClick={discardBoxHandler}></input>
    </div>
  );
};

export default DiscardShoppingList;
