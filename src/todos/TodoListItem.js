import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todos }) => {
  return (
    <div className="todo-item-container">
      <h3>{todos.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark as Complete</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
