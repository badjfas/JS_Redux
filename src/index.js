import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = " DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
}

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
}

const reducer = (state = [],action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state,{text:action.text,id:Date.now()}];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }

};

const Store = createStore(reducer);

Store.subscribe(()=>console.log(Store.getState()))

const dispatchAddToDo = (text) => {
  Store.dispatch(addToDo(text));
}

const dispatdhDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  Store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = Store.getState();
  ul.innerHTML="";
  toDos.forEach(toDo=>{
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText="삭제";
    btn.addEventListener("click",dispatdhDeleteToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

Store.subscribe(paintToDos);




const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value ="";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit",onSubmit);
