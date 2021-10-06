import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from "./actions";

// temporarily create new reducer isLoading to handle thunk actions that is regarding loading-proccess-only when requesting data from server.
// when it comes to what kind of result data after request, will be handled by todos reducer.
// later on in this project, this isLoading reducer will be merge into todos reducer when selector component implemented.
// !IT'S TIME TO DELETE THIS ISLOADING REDUCER, ALREADY INCORPORATE INSIDE TODOS REDUCER, BYE BYE.
/*
export const isLoading = (state = false, action) => {
  // only destructure type property inside action arg, no payload needed
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      // activated loading action when requesting data from server
      return true;
      // no matter what promise we got, that means we no longer load anything, so turn this loading action off.
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      // do nothing
      return state;
  }
};
*/
//export isLoading reducer to store.js 


//! beginning incorporate isLoading reducer into todos reducer.
// create initial state for todos reducer.
const initialState = {isLoading: false, data: []};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      // our payload already changes into todo, no longer text
      // our server automatically define our data state structure, we just need no return it, no need newTodo for defining our data state structure. feels weird calling it data state structure...hmm
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo)
      };
    }
    case REMOVE_TODO: {
      const { todo: removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id)
      };
    }
    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) {
            // return { ...todo, isCompleted: true };
            //? why replace it with just updatedTodo?
            return updatedTodo;
  
          }
          return todo;
        })
      };
    }
    // LOAD_TODOS_SUCCESS need special treatment bcs when we define this thunk function inside actions.js its payload is from todos in the server, not set locally like others as text. But soon this case will be normalize bcs any other actions will also be changed, every actions communicate with todos in the server, not refers to local text anymore when CRUD todo.
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos
      };
    }
    // for now, these two case have the same behaviour as default case that is just return state
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state;
  }
};
