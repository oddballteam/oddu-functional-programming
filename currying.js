// Currying

/** 
 * Ugly Way
 * 
 * const multipleBy = (x, y) => {
 *   return x * y;
 * }
 * 
 * const doubled = multiplyBy(6,2);
 * const tripled = multiplyBy(6,3);
 * 
 * pseudo currying
 * const double = (x) => x * 2;
 * const triple = (x) => x * 3;
 * 
 * What happens if you meant to do x * y + 1? - now you have to change in 2 places
 */

/*
 * Expanded version of multiplyBy
    const multiplyBy = (x) => {
        return (y) => x * y;
    }
*/

/**
 * Simpler Multiply By
 * one root function to manage if you need to add by 1 too,
 * do it here in one place
 */
const multiplyBy = x => y => x * y; 

const doubleIt = multiplyBy(2);
const tripleIt = multiplyBy(3);

console.log(`Double 6 = ${doubleIt(6)}`);
console.log(`Triple 6 = ${tripleIt(6)}`);