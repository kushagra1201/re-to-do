import React, { useState } from "react";
import { MdEdit, MdClose } from "react-icons/md";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        className="todo-text"
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className="icons">
        <MdClose
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon icon-btn"
        />
        <MdEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon icon-btn"
        />
      </div>
    </div>
  ));
}

export default Todo;
