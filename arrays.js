var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];




function addElementToBeginningOfArray (array, element) {
  //spread operator(...) COPIES ['object', ...arrayName]
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  //.unshift() MUTATES, RETURNS array.length
  array.unshift(element);
  return array;
}




function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}



function accessElementInArray(array, index) {
  return array[index];
}



function destructivelyRemoveElementFromBeginningOfArray(array) {
  //.shift() MUTATES, RETURNS array.length
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  //.slice() COPIES
  return array.slice(1);
}



function destructivelyRemoveElementFromEndOfArray(array){
  //.pop() MUTATES
  array.pop()
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}

