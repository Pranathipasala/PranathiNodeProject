//contains
var _ = require("underscore")

var result = _.contains([1,2,3],6)
console.log(result)



//map and filter
const numbers = [1, 2, 3, 4, 5];


const doubledNumbers = _.map(numbers, num => num * 2);
console.log('Doubled numbers:', doubledNumbers);


const evenNumbers = _.filter(numbers, num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);
