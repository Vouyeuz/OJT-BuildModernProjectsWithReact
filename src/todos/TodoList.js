import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from "./selectors";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
import "./TodoList.css";

const TodoList = ({ incompleteTodos, completedTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Loading todos... Run your server, please.</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h2>Incompleted:</h2>
      {incompleteTodos.map(todo => 
        <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
      )}
      <h2>Completed:</h2>
      {completedTodos.map(todo => 
        <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
      )}
    </div>
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
