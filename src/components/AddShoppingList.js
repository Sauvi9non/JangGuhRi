import React, {useState} from "react";
import "./AddShoppingList.css";

const AddShoppingList = (props) => {
  const [newProduct, setNewProduct] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  const productChangeHandler = (event) => {
    /* input text값이 onChange 되면 호출된다. 이벤트 객체에서 event.target.value값을 가져와서
    state에 값을 넣어준다. 값을 넣어줄때는 함수인 setNewProduct에 event.target.value를 인수로 넣어줌으로써 한다.*/ 
    setNewProduct(event.target.value);
  }

  const quantityChangeHandler = (event) => {
    setNewQuantity(event.target.value); 
  }

  const submitHandler = (event) => {  {/* 폼이 제출될 때 호출된다.*/}
  event.preventDefault(); { /* 이거 안해주면 브라우저 기본동작으로 인해 페이지가 바로 갱신되어버려서 기본동작을 prevent해줘야한다.*/}
  console.log("항목이 추가 되었습니다."); 

  const newItem = { //데이터 가져와서 객체 만들기   그리고 이 newItem을 NewShoppingList로 보내고 싶어...
    product: newProduct, 
    quantity: newQuantity, //꼭 마지막에 ,와
  }; //; 잊지 말기!

  props.onAddShoppingList(newItem);

  /*잘 들어왔는지 확인 */

  console.log("AddShoppingList");
  console.log({newItem});
  setNewProduct(''); /* 양방향 바인딩, 폼에 값 입력한 후에는 ''로 초기화된다!*/
  setNewQuantity('');

  //그리고 이제 ShoppingListItem에 새로운 값을 추가해줘야하는데.
  //
};
  return (
    <form onSubmit={submitHandler}> 
    <div className="shoppinglist-form">
      {/*onSubmit도 이벤트 */}
        <div className="shoppinglist-form__control">
          <label htmlFor="product">Product</label>
          <input type="text" id="product" onChange={productChangeHandler} value={newProduct}></input>
        </div>
        <div className="shoppinglist-form__control">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" min="1" max="20" onChange={quantityChangeHandler} value={newQuantity}></input>
        </div>
        <div className="shoppinglist-form__control">
          <button type="submit">Add to List</button>
        </div>
        </div>
    </form>
  
  );
};
/*

                    App
                    |
shoppinglist -------------NewShoppingList  
|                             |     
shoppinglistitem        addshoppinglist (여기서 새로 추가한 객체들을, app으로 옮겨서, 데이터 배열에 추가해야한다. 상태 끌어올리기를 통해서...)

*/
export default AddShoppingList;
