import React from "react";
import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="backdrop">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="backdrop-blur"></div>
      <main className="content">
        <div className="to-do-app">
          <h1>To-Do App</h1>
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
