import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from "./selectors";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";


const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;


const IncompletedTag = styled.h1`
  margin-top: 3rem;
  color: hsl(360, 100%, 50%);
`;

const CompletedTag = styled.h1`
  margin-top: 3rem;
  color: hsl(120, 100%, 50%, .6);
`;

const TodoList = ({ incompleteTodos, completedTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Loading todos... Run your server, please.</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <IncompletedTag>Incompleted:</IncompletedTag>
      {incompleteTodos.map(todo => 
        <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
      )}
      <CompletedTag>Completed:</CompletedTag>
      {completedTodos.map(todo => 
        <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
      )}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
