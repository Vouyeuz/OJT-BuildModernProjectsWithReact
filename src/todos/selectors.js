// these are lower-order function selectors. Their task's is solely to bridging between render components and redux-store. Any changes regarding state data or logic, no further adjustment inside mapStateToProps of our render components, just adjust these lower-order function selectors.
// export these functions with its "state" props, and import these functions out there somewhere.
export const getTodosLoading = state => state.todos.isLoading; //replace state.isLoading with state.todos.isLoading bcs our reducer initial state has been changed.
export const getTodos = state => state.todos.data; //replace state.todas with state.todos.data bcs our reducer initial state has been changed.
