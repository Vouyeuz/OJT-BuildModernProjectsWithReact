import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodoAsCompleted
} from "./actions";

// contains 2 arguments: dispatch and getState
// dispatch to dispatch other redux actions through thunk
// getState to get access to the current state of our redux-store
// !get request - read of CRUD
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

// inputValue-text as props and process using async dispatch function
// !post request - create of CRUD
export const addTodoRequest = text => async dispatch => {
  try {
    // create body for response message, send this body to server, wrap it using this standard method of posting new data to server. transform into json file using JSON.stringify()
    const body = JSON.stringify({text});
    const response = await fetch('http://localhost:8080/todos', {
      // common practice when create something using rest api
      headers: {
        'Content-type': 'application/json'
      },
      method: 'post',
      body
    });
    // save response inside todo variable, either success or failed create new data
    const todo = await response.json();
    // dispatch this todo into reducers to be process. we will define what logic should be done to our redux-store regarding this thunk-action
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

// !delete request - delete of CRUD
export const removeTodoRequest = id => async dispatch => {
  try {
    // by server default, every single todo automatically has their own id, use their id as unique identifier.
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete'
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

// !post request - update of CRUD
export const markTodoAsCompletedRequest = id => async dispatch => {
  try {
    // similar to create method using post, but bcs of its unique id, restful api already smart enough to know and differentiate what we want to update only this specific data inside database.
    // need to add `/completed` for our url bcs already defined by server.
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      method: 'post'
    })
    const updatedTodo = await response.json();
    dispatch(markTodoAsCompleted(updatedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
