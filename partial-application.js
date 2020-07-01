// Partial Application

// Whenever a curried function has some, but not all of it's data
const getTaxForItems = tax => price => qty => {
    const multiplied = price * qty;
    return (tax * multiplied) + multiplied;
}

// Set state Tax Curry
const taxTheFloridaItems = getTaxForItems(.07); // Set 't' tax to 7%
const taxTheCaliforniaItems = getTaxForItems(.90); // Set 't' tax to 90%

// Set state calculation for total pure function
//Set 'x' price to $9 for Florida and $20 for California;
const floridaPriceWithTax = taxTheFloridaItems(9); 
const californiaPriceWithTax = taxTheCaliforniaItems(20);

console.log(floridaPriceWithTax(10)); // $96.3 | (10 * $9) + (10 * 9 * .07)
console.log(californiaPriceWithTax(10)); // $380 | (10 * $20) + (10 * $20 * .07)
console.log(floridaPriceWithTax(5)); // $48.15 | (5 * $9) + (5 * $9 *.07)
console.log(californiaPriceWithTax(5)); // $190 | (5 * $20) + (5 * $20 *.07)
