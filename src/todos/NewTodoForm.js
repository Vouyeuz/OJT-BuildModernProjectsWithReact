import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="What to do?"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = 
            todos.some(todo => todo.text === inputValue);
          if (!isDuplicate) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
