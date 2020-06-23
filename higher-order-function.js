//Base Products in Cart
const cartItems = [
    { name: 'product1', price: 1, qty: 1},
    { name: 'product2', price: 2, qty: 1},
    { name: 'product3', price: 2, qty: 3},
]

//Get Total
const getTotal = (productList) => {
    return productList.reduce((currentTotal, product) => {
        return currentTotal + (product.price * product.qty);
    }, 0);
}

// Higher Order function to add Totaling
const withTotal = fn => {
    return (...args) => {
        const cartTotal = getTotal(...args);
        console.log(`Cart Total \$${cartTotal}`);
        return fn(...args);
    }
}

// Display the basic cart without Price
const displayCart = (itemsInCart) => {
    cartItems.map(item => {
        console.log(`${item.name}: QTY: ${item.qty} @ \$${item.price} `);
    })
}
// Show basic Cart
displayCart(cartItems);

//New function with Total
const displayCartWithTotal = withTotal(displayCart);

// Use new function instead
displayCartWithTotal(cartItems);




