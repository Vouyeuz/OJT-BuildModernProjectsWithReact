import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todos, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todos.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark as Complete</button>
        <button
          className="remove-button"
          onClick={() => {
            onRemovePressed(todo.text);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
