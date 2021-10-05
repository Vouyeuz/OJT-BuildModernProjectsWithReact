import {
  loadTodoInProgress,
  loadTodoSuccess,
  loadTodoFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted,
} from "./actions";

// contains 2 arguments: dispatch and getState
// dispatch to dispatch other redux actions through thunk
// getState to get access to the current state of our redux-store
export const loadTodos = () => async (dispatch, getState) => {
  //   try catch to handle in case our request failed
  try {
    dispatch(loadTodoInProgress());
    const response = await fetch("http://localhost:8080/todos-delay");
    const todos = response.json();

    // after we got response from server in form of todos, dispatch it inside our loadTodosSuccess that will pass somewhere that need to render this data, ie. TodoList.js
    dispatch(loadTodoSuccess(todos));
  } catch (e) {
    // if request failed means that this proccess will be handled by loadTodosFailure that return nothing from server, just whatever already exist inside initial todos
    dispatch(loadTodoFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
