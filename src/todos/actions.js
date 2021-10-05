export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const LOAD_TODO_IN_PROGRESS = "LOAD_TODO_IN_PROGRESS";
export const loadTodoInProgress = () => ({
  type: LOAD_TODO_IN_PROGRESS,
});

export const LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS";
export const loadTodoSuccess = (todos) => ({
  type: LOAD_TODO_SUCCESS,
  payload: { todos },
});

export const LOAD_TODO_IN_FAILURE = "LOAD_TODO_IN_FAILURE";
export const loadTodoFailure = () => ({
  type: LOAD_TODO_IN_FAILURE,
});
