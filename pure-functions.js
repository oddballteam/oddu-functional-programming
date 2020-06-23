// Pure Functions
const f = x => x + 1; // f(6) will ALWAYS return 7

//Impure Function
let count = 0;
let price = 9;
const addItem = () => {
    count++;
}

const getTotal = () => count * price;

/**
 * Save for later, we think we should get 0
 * But, because we took too long AND
 * something changed, we get 18
 */
setTimeout(() => {
 console.log('Impure Expects 0', getTotal())
}, 1000);


console.log('Impure Expects 0', getTotal()); //0
addItem();
addItem();
console.log('Impure Expects 18', getTotal()); //18

/**********************************************
 * Better solution
 */

 // Curried Multiplying
const multiplyBy = x => y => x * y; 
const multiplyByPrice = multiplyBy(9);

const pureAddItem = (currentTotal = 0) => currentTotal + 1;
const oneItemCount = pureAddItem();

setTimeout(() => {
 console.log('Pure Expected 1x9 = 9', multiplyByPrice(oneItemCount));
}, 1000);

const twoItemsCount = pureAddItem(oneItemCount);
console.log('Pure Expected 2x9 = 18', multiplyByPrice(twoItemsCount));

const threeItemsCount = pureAddItem(twoItemsCount);
console.log('Pure Expected 3x9 = 27', multiplyByPrice(threeItemsCount));


//===========  More Examples

//Impure generator
// This function can't reliably be tested because it 
// outputs differently even with the same input
const createItem = (name, price) => ({
    id: Math.floor(Math.random() * 1000),
    name,
    price
})

console.log(createItem('Peanuts', 10)); // { id: 89, name: 'Peanuts', price: 10 }
console.log(createItem('Peanuts', 10)); // { id: 22, name: 'Peanuts', price: 10 }
console.log(createItem('Peanuts', 10)); // { id: 100, name: 'Peanuts', price: 10 }

// Better Example
// Yeah, i know - this should be curried, it's just an example!
const pureCreateItem = (id, name, price) => ({ 
    id,
    name,
    price
})

const newId = Math.floor(Math.random() * 1000);

// We can run this 10,000 times, and it will always be
// the same output (assuming newId is the same)
console.log(pureCreateItem(newId, 'Peanuts', 10)); // { id: 99, name: 'Peanuts', price: 10 }
console.log(pureCreateItem(newId, 'Peanuts', 10)); // { id: 99, name: 'Peanuts', price: 10 }
console.log(pureCreateItem(newId, 'Peanuts', 10)); // { id: 99, name: 'Peanuts', price: 10 }