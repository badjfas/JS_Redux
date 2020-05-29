import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

 const ToDo = ({text,onBtnClick,id}) => {
    return (
      <li>
        <Link to={`/${id}`}>
          {text}
          </Link>

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