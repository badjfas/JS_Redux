import React, { useState } from "react";

export default () => {
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
        <input type="text" onChange={onChange}/>
        <button>추가</button>
      </form>
    </>
  );
};
