import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from "./actions";

// contains 2 arguments: dispatch and getState
// dispatch to dispatch other redux actions through thunk
// getState to get access to the current state of our redux-store
export const loadTodos = () => async dispatch => {
  //   try catch to handle in case our request failed
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    // either success or failure, dispatch(loadTodosSuccess/Failure) will stop loadTodosInProgress
    // after we got response from server in form of todos, dispatch it inside our loadTodosSuccess that will pass somewhere that need to process this data, ie. reducers.js
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    // if request failed means that this proccess will be handled by loadTodosFailure that return nothing from server, just whatever already exist inside initial todos
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
