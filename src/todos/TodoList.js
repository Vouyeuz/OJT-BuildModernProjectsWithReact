import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
// for dispatch purpose
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
// no longer needed
// import { removeTodo, markTodoAsCompleted } from "./actions";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const LoadingText = styled.div`
  font-size: 2rem;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
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
    startLoadingTodos()
  }, []) //put empty array to prevent useEffect to recalling itself infinitely

  const loadingMessage = 
    <LoadingText>
      Loading todos...Please wait, or rather, turn on your server!
    </LoadingText>
  ;

  const content = (
    <ListWrapper>
      <NewTodoForm />
      {todos.map((todo) => 
        <TodoListItem
        // replace todo.text with todo.id, even though not neccessary for this case, bcs todo.text already unique bcs no duplicate text
        key={todo.id}
        todo={todo}
        //defined dispatch's props to be passed for TodoListItem component.
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
        />
      )}
    </ListWrapper>
  );

  // if isLoading true then return loading message, when done loading return todolist's content
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  // add access to isLoading props inside redux-store
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch startLoadingTodos only when first time load application or when new request made?
  startLoadingTodos: () => dispatch(loadTodos()),
  // replace text argument with id
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// !note:
// export default connect(mapStateToProps)(TodoList);
// export default connect(null, mapDispatchToProps)(TodoList);
