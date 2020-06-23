// Composition
// Combining multiple functions so the output is chained

const double = x => x * 2;
const triple = x => x * 3;
const half = x => x / 2;
console.log(double(triple(5))); //30
console.log(half(triple(double(5)))); //15 -- gets ugly, quick.

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

console.log(repeat(exclaim(scream('Oddball Rocks')))); //ODDBALL ROCKS! ODDBALL ROCKS!

// Create compose function

// Take a list of function and compose them in reverse (so its readable) and make
// a new function from it.
const compose = (...fns) => x => fns.reduceRight((accumulator, fn) => fn(accumulator), x);

const partiallyExcited = compose(exclaim);
const veryExcited = compose(scream, partiallyExcited);
const uberExcited = compose(repeat, veryExcited);

console.log('partially excited', partiallyExcited('Oddball Rocks'));
//Oddball Rocks!

console.log('very excited', veryExcited('Oddball Rocks'));
//ODDBALL ROCKS!

console.log('uber excited', uberExcited('Oddball Rocks'));
// ODDBALL ROCKS! ODDBALL ROCKS!

console.log('Travis at retreat', uberExcited(uberExcited('Oddball Rocks')));
//ODDBALL ROCKS! ODDBALL ROCKS!! ODDBALL ROCKS! ODDBALL ROCKS!!
