var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);



var addElementToBeginningOfArray = ["Mashed Potatoes"];
 addElementToBeginningOfArray = ["Steak", ...addElementToBeginningOfArray];
 
var destructivelyAddElementToBeginningOfArray = ["Green Beans"];
 destructivelyAddElementToBeginningOfArray = ["Gravy", ...destructivelyAddElementToBeginningOfArray];
 
addElementToBeginningOfArray;
destructivelyAddElementToBeginningOfArray;
 
 

var accessElementInArray = [1];
[...accessElementInArray, 2];

console.log(accessElementInArray[0]);



var addElementToBeginningOfArray = ["Mashed Potatoes"];
 addElementToBeginningOfArray = ["Steak", ...addElementToBeginningOfArray];




var removeElementFromBeginningOfArray = ["one"];
removeElementFromBeginningOfArray.unshift(0);


var destructivelyRemoveElementFromEndOfArray = ["one"];
destructivelyRemoveElementFromEndOfArray.slice(0);
destructivelyRemoveElementFromEndOfArray.legnth(0);
