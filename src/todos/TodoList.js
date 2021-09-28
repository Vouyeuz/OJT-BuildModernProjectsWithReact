import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from "./thunks";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Loading todosss</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo => 
        <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
      )}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
