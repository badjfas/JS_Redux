import {createStore} from "redux";

const ADD = "ADD";

const DELETE = "DELETE";

 const addToDo = (text) => {
    return {
      type: ADD,
      text,
    };
}

 const deleteToDo = (id) => {
    return {
      type: DELETE,
      id:parseInt(id),
    };
}

const initState = {
  number:0,
  cart : []
}

const reducer = (state = initState, action) => {
    const {cart} = state;
    console.log("cart:",cart)
    switch (action.type) {
      case ADD:
        console.log("state:",state);
        return {
          ...state,
          cart: [{text:action.text , id: Date.now()} , ...state.cart]
        }
        // return state.cart[{text:action.text , id: Date.now()}, ...state.cart]
      case DELETE:
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }

};
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}


export default store;