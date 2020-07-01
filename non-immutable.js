/****************
 * Mutable Data (it can be changed)
 ****************/

 //Name List or Object
 const mutableNamesArray = ['Jane', 'Jack', 'Joe'];
 const mutableNamesObject = { jane: 'Jane', jack: 'Jack', joe: 'Joe'};
 
  // Reference to names list
 const namesArrayRef = mutableNamesArray;
 const namesObjectRef = mutableNamesObject;
 
 //They are the exact same for any data type
 console.log(mutableNamesArray === namesArrayRef); //true
 console.log(mutableNamesObject === namesObjectRef); //true
 
 // modify  the reference
 namesArrayRef.push('Sam');
 namesObjectRef.jane = 'Sam'; //Set Jane to Sam (effects original)
 
 //effects original and now you CAN'T trust your data
 console.log(mutableNamesArray); //[ 'Jane', 'Jack', 'Joe', 'Sam' ]
 console.log(mutableNamesObject); //{ jane: 'Sam', jack: 'Jack', joe: 'Joe'}