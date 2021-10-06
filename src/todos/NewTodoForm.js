import React, { useState } from "react";
import styled from "styled-components";
// connect component to redux-store
import { connect } from "react-redux";
// define logic for dispatch function
// import { createTodo } from "./actions";
// no longer need createTodo from action, replace it with addTodoRequest from thunks. bcs createTodo function from action already used inside addTodoRequest function.
import { addTodoRequest } from "./thunks";
import { getTodos } from "./selectors"; //replacement for mapStateToProps' property's value.

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

// received todos props and onCreatePressed dispatch method from mapStateToProps and mapDispatchToProps
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContainer>
      <NewTodoInput
        type="text"
        placeholder="What to do next?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      <NewTodoButton
        onClick={() => {
          // thanks for access granted by mapStateToProps, capable of searching for duplicate todos inside redux-store real-time
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
            );
            const isEmpty = (inputValue === '');
            if (!isDuplicateText && !isEmpty) {
              // when no duplicate data found, allowed to dispatch this mapDispatchToProps' properties action to change and update current state inside redux-store.
              // updated state after triggered by this dispatch, can be use by other components ie. TodoList and TodoListItem components for rendering purpose.
              onCreatePressed(inputValue);
              // reset value
              setInputValue("");
            }
          }}
          >
        Create Todo
      </NewTodoButton>
    </FormContainer>
  );
};


//mapStateToProps function gave access to component for accessing state inside redux-store.
//state argument contain every state of the application.
//in this case NewTodoForm.js need access to todos reducers inside our redux-store.
const mapStateToProps = (state) => ({
  //- todos: state.todos, //passing this todos property into this component props up above.
  todos: getTodos(state) //replace with selector lower-order function.
});

//trigger change inside redux-store using this dispatch argument.
// onCreatePressed logic is defined by createTodo function that imported from actions.js file
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
