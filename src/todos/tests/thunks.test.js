import 'node-fetch';
import fetchMock from "fetch-mock";
import { expect } from "chai";
import sinon from "sinon";
import { loadTodos } from "../thunks";

describe("The loadTodos thunk's task:", () => {
    it("Dispatches the correct actions in the success scenario", async () => {
        // using node-fetch & fetch-mock to create fake fetch for testing, we don't want to really dispatch our fetch when testing, especially when testing "delete" method.
        const fakeDispatch = sinon.spy();

        // define what our fetch return when our thunk calls it.
        // not a big deal if fakeTodos doesn't have the same properties as our real todos.
        const fakeTodos = [{ text: "1"}, { text: "2"}];

        // when dispatch fetch, it's only returning fakeTodos instead of doing real request to the server and consume API.
        fetchMock.get("http://localhost:8080/todos", fakeTodos);

        // define what our dispatch testing exactly want to do.
        const expectedFirstAction = { type: "LOAD_TODOS_IN_PROGRESS" };
        const expectedSecondAction = { 
            type: "LOAD_TODOS_SUCCESS",
            payload: {
                todos: fakeTodos
            }
        };

        // call our thunk.
        await loadTodos()(fakeDispatch);

        // do actual testing our fakeDispatch in correct order.
        // getCall.(0) means first call that was made to our dispatch.
        // args[0] means first argument that was passed during the first call
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);


        // since no real request made, we need to reset fetch state into initial state.
        fetchMock.reset();
         
    });
});

// !when testing thunk make sure of two things: ["dispatch correct actions at the right time", "make external request"];