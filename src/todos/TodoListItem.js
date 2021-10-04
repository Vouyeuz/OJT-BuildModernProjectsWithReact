import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <TodoItemContainer>
      <h3>{todo.text}</h3>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => onCompletedPressed(todo.text)}>
            Mark as Completed
          </CompletedButton>
        )}

        <RemoveButton
          onClick={() => {
            onRemovePressed(todo.text);
          }}
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoListItem;
