import React from 'react';
import styled from 'styled-components';
import NewFormTodo from './NewFormTodo';
import TodoListItem from './TodoListItem';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
  `;

const TodoList = ({todos = [{text: "Hello"}]}) => {
    return (
        <ListWrapper>
            <NewFormTodo />
            {todos.map(todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.text}
                />
            ))}
        </ListWrapper>
    )
}

export default TodoList
