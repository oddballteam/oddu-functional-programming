// Pure Functions
// const f = x => x + 1; // f(6) will ALWAYS return 7

const pureAddItem = (currentTotal = 0) => currentTotal + 1;
const pureGetTotal = (itemCount, price) => itemCount * price;

const oneItemCount = pureAddItem(); //set to one product

/**
 * Save for later, we think we should get 9
 * and because this is pure, we will always get 9
 */
setTimeout(() => {
 console.log('Pure Expected 1 x 9 = 9', pureGetTotal(oneItemCount, 9));
}, 1000);

const twoItemsCount = pureAddItem(oneItemCount);
console.log('Pure Expected 2 x 9 = 18', pureGetTotal(twoItemsCount, 9));

const threeItemsCount = pureAddItem(twoItemsCount);
console.log('Pure Expected 3 x 9 = 27', pureGetTotal(threeItemsCount, 9));

//--- PURE Generator/Factory Example

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