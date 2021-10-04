import React from "react";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({todos = [{text: "Hello"}, {text: "World"}]}) => {
  return (
    <ListWrapper>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
