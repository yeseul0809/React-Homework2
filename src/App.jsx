import { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const deleteHandler = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };

  const completeHandler = (id) => {
    const completeTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(completeTodos);
  };

  return (
    <>
      <h1>My Todo List</h1>
      <InputForm setTodos={setTodos} />
      {/* working */}
      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        isDone={false}
      />
      {/* done */}
      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        isDone={true}
      />
    </>
  );
};

export default App;
