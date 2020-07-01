// (un)Partial Application

let floridaTax = .07;
let caliTax = .90;
let floridaPrice = 9;
let caliPrice = 20;

/**
 * Get Local Total for an Item
 * @param {*} Local Tax
 * @param {*} Local Price
 * @param {*} qty 
 */
const getLocalTotalForItems = (tax, price, qty) => {
    const multiplied = price * qty;
    return (tax * multiplied) + multiplied;
}

// Lots of repeating arguments/data
// if the price or tax is changed in the application, these will give 
// untrustworthy responses.
console.log(getLocalTotalForItems(floridaTax, floridaPrice, 10)); // $96.3 | (10 * $9) + (10 * 9 * .07)
console.log(getLocalTotalForItems(caliTax, caliPrice, 10)); // $380 | (10 * $20) + (10 * $20 * .07)
console.log(getLocalTotalForItems(floridaTax, floridaPrice, 5)); // $48.15 | (5 * $9) + (5 * $9 *.07)
console.log(getLocalTotalForItems(caliTax, caliPrice, 5)); // $190 | (5 * $20) + (5 * $20 *.07)
