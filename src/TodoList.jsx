import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteHandler, completeHandler, isDone }) => {
  return (
    <div className={isDone ? "Done" : "Working"}>
      <h3>{isDone ? "Done!" : "working!"}</h3>
      <div>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
