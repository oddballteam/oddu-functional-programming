// (un)Partial Application

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
console.log(getLocalTotalForItems(.07, 9, 10)); // $96.3 | (10 * $9) + (10 * 9 * .07)
console.log(getLocalTotalForItems(.90, 20, 10)); // $380 | (10 * $20) + (10 * $20 * .07)
console.log(getLocalTotalForItems(.07, 9, 5)); // $48.15 | (5 * $9) + (5 * $9 *.07)
console.log(getLocalTotalForItems(.90, 20, 5)); // $190 | (5 * $20) + (5 * $20 *.07)
