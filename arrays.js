var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, x){
  var newArr = [x, ...array];
  return newArr;
  
}

function destructivelyAddElementToBeginningOfArray(array, y){
  array.unshift(y);
  return array;
}

function addElementToEndOfArray(array, x){
  var newArr = [ ...array, x];
  return newArr;
}


function destructivelyAddElementToEndOfArray(array, y){
  array.push(y);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newArry = array.slice(1);
  return newArry;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var nArr = array.slice(0, array.length-1);
  return nArr;
}