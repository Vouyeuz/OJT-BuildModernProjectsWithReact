import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted
          ? null
          : <button 
          onClick={() => onCompletePressed(todo.id)}
          className="completed-button"
          >
            Mark as Complete
          </button>
        }
        <button
          className="remove-button"
          onClick={() => {
            onRemovePressed(todo.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
