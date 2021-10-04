// !TESTING STYLED-COMPONENTS
import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("The getBorderStyleForDate's task:", () => {
  it("returns none when the date is less than five days ago", () => {
    // fake data
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    
    // expected
    // const expected = "none";
    const expected = "2px solid black"; //failed case
    
    // actual logic like original function
    const actual = getBorderStyleForDate(recentDate, today);
    
    // run testing
    expect(actual).to.deep.equal(expected);
  });
  it("returns a border when the date is more than five days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 7);
    // expected case #1 and passing
    // const expected = getBorderStyleForDate(); /*this one running properly*/
    
    // expected case #2 and failing
    // const expected = getBorderStyleForDate; /*but this one runs error and assert expected result "5px..." from original file, undefined here, so in truth they're connected? */
    
    // expected case #3 and passing plus actual
    // const expected = "5px solid hsl(360, 100%, 50%, .8)";
    
    // expected case #4 and failing
    const expected = "2px solid hsl(360, 100%, 50%, .8)";
    
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.deep.equal(expected);
  });
});

// *actual >< expected
// actual: real file?
// expected: what logic we want, and implementing it in testing?
