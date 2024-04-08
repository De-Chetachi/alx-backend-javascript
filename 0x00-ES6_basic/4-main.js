import returnHowManyArguments from './4-rest-parameter.js';
const arr = [1, 2, 3, 4]
console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
console.log(returnHowManyArguments(...arr));
