import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks"; // for dispatch purpose
import { getIncompleteTodos, getCompletedTodos, getTodosLoading } from "./selectors"; //mapStateToProps' properties' value replacement.
// import { removeTodo, markTodoAsCompleted } from "./actions"; // no longer needed

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const LoadingText = styled.div`
  font-size: 2rem;
  color: red;
`;

const Incomplete = styled.h2`
  color: hsl(360, 100%, 50%);
  margin-top: 3rem;
  margin-left: 1.5rem;
  display: ${props => (props.data < 1
    ? 'none'
    : null)}; //dunno wether this syntax is efficient or not.
`;

const Completed = styled(Incomplete)`
  color: hsl(120, 100%, 50%);
`;


const TodoList = ({
  inCompleteTodos, //getTodos replacement from mapStateToProps' props
  completedTodos, //getTodos replacement from mapStateToProps' props
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

      {/* separate incomplete and completed todos */}
      {/* define data props so we can pass it to styled-components */}
      <Incomplete data={inCompleteTodos.length}>Incomplete:</Incomplete>
      {inCompleteTodos.map((todo) => 
        <TodoListItem
        // replace todo.text with todo.id, even though not neccessary for this case, bcs todo.text already unique bcs no duplicate text
        key={todo.id}
        todo={todo}
        //defined dispatch's props to be passed for TodoListItem component.
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
        />
        )}

      {/* separate incomplete and completed todos */}
      {/* define data props so we can pass it to styled-components */}
      <Completed data={completedTodos.length}>Completed:</Completed>
      {completedTodos.map((todo) => 
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
  isLoading: getTodosLoading(state), //replace with selectors lower-order function
  //- todos: getTodos(state),//replace with selectors lower-order function
  // replace todos props with getIncompleteTodos and getCompletedTodos from selector.
  inCompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state)
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
