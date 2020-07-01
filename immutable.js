/****************
 * Immutable Data
 ***************/

//Name List or Object
const immutableNamesArray = ['Jane', 'Jack', 'Joe'];
const immutableNamesObject = { jane: 'Jane', jack: 'Jack', joe: 'Joe'};

//Create COPY to use
const namesArrayCopy = [...immutableNamesArray];
const namesObjectCopy = {...immutableNamesObject};

console.log(immutableNamesArray === namesArrayCopy); //false
console.log(immutableNamesObject === namesObjectCopy); //false

// modify  the COPY
namesArrayCopy.push('Sam');
namesObjectCopy.jane = 'Sam'; //Set Jane to Sam (does NOT effect original)

// does NOT effects original and now you CAN trust your data
console.log(immutableNamesArray); //[ 'Jane', 'Jack', 'Joe']
console.log(namesArrayCopy); //[ 'Jane', 'Jack', 'Joe', 'Sam' ]

console.log(immutableNamesObject); //{ jane: 'Jane', jack: 'Jack', joe: 'Joe'}
console.log(namesObjectCopy); //{ jane: 'Sam', jack: 'Jack', joe: 'Joe'}


