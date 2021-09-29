import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

//! reducer for redux-thunk
// !now deleted bcs already incorporate into todos using selectors
/*export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      // loading...loading...Loading...
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      // sinces loaded, means no longer loading, regardless its result
      return false;
    default:
      // shows its state before thunk action triggered
      return state;
  }
};
*/

// !incorporate isLoading reducer into todos reducer. 
/*
  so state structure will transform,
  from this:
    {
      isLoading: true,
      tod0s: [...],
    }
  into this:
    {
      data: {
        isLoading: true,
        t0dos: [...],
      }
    }
*/
// !this oneline syntax change state data-structure
const initialState = { isLoading: false, data: [] };

//! reducer for state management (redux + redux-thunk)
export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //! redux actions starts here:
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo)
      };
    }
    case REMOVE_TODO: {
      // ? try to change todo: todoToRemove nickname into todo: removedTodo just like in thunks
      // * succeed, synced nicknames between thunks and reducers, just like todo: updatedTodo
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
            return updatedTodo;
          }
          return todo;
        })
      };
    }

    //! redux-thunk actions starts here:
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        // request finished and data loaded
        data: todos
      };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        // no data rendered bcs unfinished request
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        // no data rendered bcs failed request
      };
    }
    default:
      return state;
  }
};
