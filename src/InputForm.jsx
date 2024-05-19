import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };

    setTodos((todos) => [...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  const inputStyle = {
    borderRadius: "10px",
    border: "solid 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  return (
    <>
      <form style={inputStyle} onSubmit={onSubmitHandler}>
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>내용</p>
        <input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default InputForm;
