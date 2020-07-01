const double = x => x * 2;
const triple = x => x * 3;
const half = x => x / 2;
console.log(double(triple(5))); //30
console.log(half(triple(double(5)))); //15 -- gets ugly, quick.

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// Partially Excited
console.log(exclaim('Oddball Rocks'));

// Very Excited
console.log(exclaim(scream('Oddball Rocks')));

// Uber Excited
console.log(repeat(exclaim(scream('Oddball Rocks')))); //ODDBALL ROCKS! ODDBALL ROCKS!

// Travis Excited
const uberExcited = repeat(exclaim(scream('Oddball Rocks')));
console.log(repeat(exclaim(scream(uberExcited))))