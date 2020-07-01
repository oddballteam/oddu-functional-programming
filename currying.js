// Currying

/**
 * Simpler Multiply By
 * one root function to manage if you need to add by 1 too,
 * do it here in one place
 */
const multiplyBy = x => y => x * y; 

const doubleIt = multiplyBy(2); //x = 2, y = 6 from below
const tripleIt = multiplyBy(3); //x = 3, y = 6 from below

console.log(`Double 6 = ${doubleIt(6)}`);
console.log(`Triple 6 = ${tripleIt(6)}`);