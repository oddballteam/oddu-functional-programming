// Composition
// Combining multiple functions so the output is chained

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

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
