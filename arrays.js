var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementtoadd) {
  var newarray = [elementtoadd, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, elementtoadd) {
  array.unshift(elementtoadd);
  return array;
}

function addElementToEndOfArray(array, elementtoadd) {
 var newarray = [...array, elementtoadd];
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, elementtoadd) {
  array.push(elementtoadd);
  return array;
}

function accessElementInArray (array, index) {
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length -1);
  return newarray;
}