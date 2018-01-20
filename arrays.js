var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

addElementToBeginningOfArray(chocolateBars,"Heath");

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "Heath");

function addElementToEndOfArray(array, element){
  return [ ...array, element];
}

addElementToEndOfArray(chocolateBars,foo);

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

destructivelyAddElementToEndOfArray(chocolateBars,"Heath");

function accessElementInArray(array, index){
  return array[index];
}

accessElementInArray(chocolateBars, 3)

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array){
array.pop();
return array;
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}

removeElementFromEndOfArray(chocolateBars);
