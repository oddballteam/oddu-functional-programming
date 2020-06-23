// Point Free
// Using point-free replaces anonymous funtions with named ones

const numbers = [1,2,3];

// double them using 'inner rim' - 'x' is a placeholder
const doubled = numbers.map(x => x * 2);
console.log(doubled);// [2,4,6]

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

const anotherNumberSet = [5,10,20];
 // Reusability example - what if business logic changes? - DRY
const doubledSample1 = numbers.map(x => x * 2); // [2,4,6]
const doubledSample2 = anotherNumberSet.map(x => x * 2); // [10, 20, 40]
console.log(doubledSample1, doubledSample2); // [ 2, 4, 6 ] [ 10, 20, 40 ]

// vs
const pointFreeDoubledSample1 = numbers.map(doubleIt); // [2,4,6]
const pointFreeDoubledSample2 = anotherNumberSet.map(doubleIt); // [10, 20, 40]
console.log(pointFreeDoubledSample1, pointFreeDoubledSample2); // [ 2, 4, 6 ] [ 10, 20, 40 ]