import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

//! reducer for redux-thunk
export const isLoading = (state = false, action) => {
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

//! reducer for state management (redux + redux-thunk)
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    //! redux actions starts here:
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      // ? try to change todo: todoToRemove nickname into todo: removedTodo just like in thunks
      // * succeed, synced nicknames between thunks and reducers, just like todo: updatedTodo
      const { todo: removedTodo } = payload;
      return state.filter((todo) => todo.id !== removedTodo.id);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      return state.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    }

    //! redux-thunk actions starts here:
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
