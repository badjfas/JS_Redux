import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

 const ToDo = ({text,onBtnClick}) => {
    return (
      <li>
        {text}
        <button onClick={onBtnClick}>삭제</button>
      </li>
    );
}

const mapDispatchToProps=(dispatch,{id}) => {
    return {
      onBtnClick: () => dispatch(actionCreators.deleteToDo(id)),
    };
}
export default connect(null,mapDispatchToProps)(ToDo);