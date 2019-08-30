var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
console.log(chocolateBars);


var dinner = ["mashed potatoes", "green beans"];
function addElementToBeginningOfArray(element, ...dinner) {
return [element, ...dinner];
}
addElementToBeginningOfArray(dinner, "meat loaf"); 



function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}



function addElementToEndOfArray(array, element) {
  newArr= [...array,element];
  return newArr;
}


function destructivelyAddElementToEndOfArray(array, element) { array.push(element);
return dinner;
}
destructivelyAddElementToEndOfArray(dinner, "dinner rolls");


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(element)
  return array;
}


function removeElementFromBeginningOfArray(array, element){
  return array.slice(1)
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element)
  return array;
}


function removeElementFromEndOfArray(array){
  var newArrayMinusElement = array.slice(0, array.length -1)
  return newArrayMinusElement;
}