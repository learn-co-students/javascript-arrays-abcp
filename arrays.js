var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var a = array.slice();
  a.unshift(element);
  return a;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var a = array.slice();
  a.push(element);
  return a;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementToBeginningOfArray(array){
  array.shift(1);
  return array;
}

function removeElementFromBeginningOfArray(array){
  var a = array.slice(1);
  return a;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  var a = array.slice();
  a.pop();
  return a;
}

