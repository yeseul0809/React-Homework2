import React from "react";

const Todo = ({ todo, deleteHandler, completeHandler }) => {
  const { id, title, contents, isDone } = todo;
  const todoStyle = {
    border: "solid 1px",
    width: "200px",
  };
  return (
    <>
      <div style={todoStyle}>
        <p>{title}</p>
        <p>{contents}</p>
        <button onClick={() => deleteHandler(id)}>삭제</button>
        <button onClick={() => completeHandler(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </>
  );
};

export default Todo;
