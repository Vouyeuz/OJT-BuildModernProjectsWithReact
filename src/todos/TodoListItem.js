import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
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
