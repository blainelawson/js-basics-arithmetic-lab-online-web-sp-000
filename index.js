/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
var newID = oldID
newID += 1000000000


// if (currentAge.isInteger == true) {
//     ageIsValid = true;
// } else {
//     ageIsValid = false;
// }

var ageIsValid = Number.isInteger(currentAge)

const randomNumber = Math.floor(Math.random() * 10)*2 + 1;

var randomInteger = Math.floor(randomNumber)

var randomUserID = randomNumber + 1000000000