import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
// for dispatch purpose
import { loadTodos } from "./thunks";
import { removeTodo, markTodoAsCompleted } from "./actions";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const LoadingMessage = styled.div`
  font-size: 3rem;
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WarningMessage = styled(LoadingMessage)`
  color: red;
`;


const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) => {
  // make TodoList start calling isLoading component, make it only called for once using useEffect, just like componentDidMount() in class-based component
  useEffect(() => {
    startLoadingTodos();  
  }, []) //put empty array to prevent useEffect to recalling itself infinitely

  const loadingMessage = (
    <LoadingMessage>
      Loading todos...Please wait,
      <WarningMessage> or rather, turn on your server!</WarningMessage>
    </LoadingMessage>
  );

  const content = (
    <ListWrapper>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          //defined dispatch's props to be passed for TodoListItem component.
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );

  // if isLoading true then return loading message, when done loading return todolist's content
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  // add access to isLoading props inside redux-store
  isLoading: state.isloading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch startLoadingTodos only when first time load application or when new request made?
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// !note:
// export default connect(mapStateToProps)(TodoList);
// export default connect(null, mapDispatchToProps)(TodoList);
