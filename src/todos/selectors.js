import { createSelector } from "reselect";

// !responsible to interpreted how data were structured in redux-store
export const getTodosLoading = state => state.todos.isLoading;
export const getTodos = state => state.todos.data;


// !down below are higher-order selectors, but just like other normal components that have no idea how data were structured inside redux-store, so reliant to lower-order selectors like getTodos and getTodosLoading in this case.
export const getIncompleteTodos = createSelector(
    // catch getTodos function first argument 
    getTodos,
    // define function(logic) that is to choose incompleted todos, for second argument
    // this very function also means for returning value of this entire getIncompleteTodos function
    (todos) => todos.filter(todo => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted)
);


// !fun fact about createSelector function from "Reselect": 
// *we can pass as many selector we want, and get the result of all the other previous results.
// *first to n arguments can have as many data as we want, but last argument has to be define its createSelector purpose using functional component that process previous arguments.
// *more importantly we can pass another createSelector functions, so we can make more expressive data.
/*
EXAMPLE:
export const getIncompleteTodos = createSelector(
    #1 arg - getTodos,
    #2 arg - getTodosLoading,
    #last arg - (todos, isLoading) => isLoading
                            ? []
                            : todos.filter(todo => !todo.isCompleted)
);
*/

// !another important fun fact:
// *createSelector have memorization method, because its process pure function. 
// *pure function known as function that take input and give the exact same output from selected input depending on its logic proccess. Example is just like filtering bunch of input data and return some filtered data. And that is what createSelector doing.
// *Bcs its pure function, so no matter how many times this function being called inside our application, it will provide the same output. Anddd, for computation-power efficacy purpose, memorization method come in handy, just like caching.
// *Only recomputed if any arguments changes.
// *Down below is an example of a function with same result but computed for every calls:

/*
EXAMPLE:
export const getIncompleteTodos = state => {
    const { data: todos } = state.todos;
    return todos.filter(todo => todo.isCompleted);
};
*/