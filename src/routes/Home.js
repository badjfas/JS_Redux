import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "./../components/ToDo"
const Home = ({toDos,addToDo}) => {
    console.log(toDos);
    const [text,setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
        console.log(text)
    }
  return (
    <>
      <h1>To Do Lists</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
          {toDos.map(todo=><ToDo {...todo} key={todo.id}/>)}
      </ul>
    </>
  );
};

const getCurrentState = (state) =>{
    console.log(state);
    return {
       toDos : state
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
      addToDo: (text) => dispatch(actionCreators.addToDo(text))
  }
};
export default connect(getCurrentState,mapDispatchToProps)(Home);
