 import { expect } from "chai";
 import { getCompletedTodos } from "../selectors";

 describe("The getCompletedTodos selector's task:", () => {
     it("Returns only completed todos", () => {
        // logis is, define our list of todos that will be returned by our test selector.
        const fakeTodos = [{
            text: "Say Hello",
            isCompleted: true
        }, {
            text: "Say Goodbye",
            isCompleted: false
        }, {
            text: "Climb Mount Everest",
            isCompleted: false
        }];
        // only expect completedTodos as return
        // ?yg jadi acuan yg mana untuk seolah olah mengkorelasikan antara file testing kita dengan yg asli? fakeTodos, expected, original state, atau apa?
        // ?atau cuma custom aja ngikutin data asli? jadi kalo misal ada kesalahan ngoding di file test, bisa saja file aslinya benar kan? Jadi antara file asli dengan test tidak saling terkait secara otomatis ya?
        // ?kenapa kalo data di fakeTodos yg dijadikan expected ada salah 1 huruf saja, hasilnya error, tapi data lainnya toleransi errornya jauh lebih besar, padahal jenis kesalahannya dibuat sama?
        const expected = [{
                text: "Say Hello",
                isCompleted: true
        }];
        // implementing .resultFunc() one of createSelector's properties that memorize createSelector's last arg's result.
        // ?actual cuma menjalankan fungsi yg sama dengan fungsi aslinya, tapi data yang diolah berbeda?
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
     });
 });