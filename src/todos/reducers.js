import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODO_IN_PROGRESS,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_IN_FAILURE
} from "./actions";

// temporarily create new reducer isLoading to handle thunk actions that is regarding loading-proccess-only when requesting data from server.
// when it comes to what kind of result data after request, will be handled by todos reducer.
// later on in this project, this isLoading reducer will be merge into todos reducer when selector component implemented.
export const isLoading = (state = false, action) => {
  // only destructure type property inside action arg, no payload needed
  const { type } = action;

  switch (type) {
    case LOAD_TODO_IN_PROGRESS:
      // activated loading action when requesting data from server
      return true;
      // no matter what promise we got, that means we no longer load anything, so turn this loading action off.
    case LOAD_TODO_SUCCESS:
    case LOAD_TODO_IN_FAILURE:
      return false;
    default:
      // do nothing
      return state;
  }
};
//export isLoading reducer to store.js 


export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
