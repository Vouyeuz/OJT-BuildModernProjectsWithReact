import { expect } from "chai";
import { todos } from "../reducers";

describe("The todos reducer's task:", () => {
    it("Adds a new todo when CREATE_TODO action is received", () => {
        // not a big deal if fakeTodos doesn't have the same properties as our real todos. he said this when testing thunk. maybe reducers has similar rules.
        const fakeTodo = { text: "Hello, I'm a test expert!", isCompleted: true };
        const fakeAction = {
            // type: "CREATE_TODO",
            type: "REMOVE_TODO",
            // ?Hoo jadi yg diotak atik itu expected action ya, soalnya fake todos/data itu bebas, trus actual function itu yg connect langsung ke file asli?
            payload: {
                todo: fakeTodo
            }
        };
        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});