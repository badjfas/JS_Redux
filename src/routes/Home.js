import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({toDos}) => {
    console.log(toDos);
    const [text,setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
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
          {JSON.stringify(toDos)}
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
export default connect(getCurrentState)(Home);
