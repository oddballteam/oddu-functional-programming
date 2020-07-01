//Impure Function

let count = 0;
let price = 9;
const addItem = () => {
    count++;
}

const getTotal = () => count * price;

addItem(); //Set to 1 product

/**
 * Save for later, we think we should get 0
 * But, because we took too long AND
 * something changed, we get 18
 */
setTimeout(() => {
    console.log('Impure Expects 9', getTotal())
}, 1000);
   
   
console.log('Impure Expects 9', getTotal()); //0
addItem();
addItem();
console.log('Impure Expects 27', getTotal()); //18

//--- Impure Generator Example

//Impure generator/factory
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