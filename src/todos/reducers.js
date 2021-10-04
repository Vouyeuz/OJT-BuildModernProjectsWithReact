import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETE } from "./actions";

export const todos = (state = [], action) => {
const {type, payload} = action;

switch (type) {
    case CREATE_TODO: {
        const {text} = payload;
        const newTodo = {
            text,
            isCompleted: false
        }
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {

    }
    case MARK_TODO_AS_COMPLETE: {

    }
    default:
        return state;
}

}