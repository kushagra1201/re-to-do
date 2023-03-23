import React from "react";
import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="to-do-app">
      <h1>To-Do App</h1>
      <TodoList />
    </div>
  );
}

export default App;
