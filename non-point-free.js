//Pointful
// Using named variable in anonymous functions

const numbers = [1,2,3];

// double them using 'inner rim' - 'x' is a placeholder
const doubled = numbers.map(x => x * 2);
console.log(doubled);// [2,4,6]

// Example 2
const anotherNumberSet = [5,10,20];

 // Reusability example - what if business logic changes? now they want to 'triple'
const doubledSample1 = numbers.map(x => x * 2); // [2,4,6]
const doubledSample2 = anotherNumberSet.map(x => x * 2); // [10, 20, 40]
console.log(doubledSample1, doubledSample2); // [ 2, 4, 6 ] [ 10, 20, 40 ]