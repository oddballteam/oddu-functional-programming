// Point Free
// Using point-free replaces anonymous funtions with named ones

const numbers = [1,2,3];

// Make it pointfree
const doubleIt = x => x * 2;
const pointFreeDoubled = numbers.map(doubleIt);
console.log(pointFreeDoubled); // [2,4,6]

/**
 * Why though?
 *  - legibility
 *  - easier to modify business logic
 *  - better error tracing.. "Err in doubleIt vs Err in line 22 anon func."
 *  - reusability
 *  - easier to test
 */

 //Example 2
const anotherNumberSet = [5,10,20];

const pointFreeDoubledSample1 = numbers.map(doubleIt); // [2,4,6]
const pointFreeDoubledSample2 = anotherNumberSet.map(doubleIt); // [10, 20, 40]
console.log(pointFreeDoubledSample1, pointFreeDoubledSample2); // [ 2, 4, 6 ] [ 10, 20, 40 ]