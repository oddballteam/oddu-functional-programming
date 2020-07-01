// Uncurried Example

const multiplyBy = (x, y) => x * y;

const doubled = multiplyBy(6,2);
const tripled = multiplyBy(6,3);

console.log(doubled, tripled);

// What happens if you meant to do x * y + 1? - now you have to change in 2 places