// !TESTING STYLED-COMPONENTS
import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("The getBorderStyleForDate's task:", () => {
  it("returns none when the date is less than five days ago", () => {
    // fake data
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    // expected
    const expected = "none";
    // actual logic like original function
    const actual = getBorderStyleForDate(recentDate, today);
    // run testing
    expect(actual).to.deep.equal(expected);
  });
  it("returns a border when the date is more than five days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 7);

    //? const expected = getBorderStyleForDate(); /*this one running properly*/

    //? const expected = getBorderStyleForDate; /*but this one runs error and assert expected result "5px..." from original file, undefined here, so in truth they're connected? */
    
    const expected = "5px solid hsl(360, 100%, 50%, .8)";

    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.deep.equal(expected);
  });
});
