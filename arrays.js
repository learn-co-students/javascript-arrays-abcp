var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(oldArray, newItem) {
  let newArray = [newItem,... oldArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(oldArray, newItem) {
oldArray.unshift(newItem);
 
  return oldArray;
} 

function addElementToEndOfArray(oldArray, newItem) {
  let newArray = [...oldArray,newItem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(oldArray, newItem) {
  oldArray.push(newItem);
  return oldArray;
}

function accessElementInArray(array, position) {
  return array[position];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(oldArray) {
  let newArray = oldArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(oldArray) {
  oldArray.pop();
  return oldArray;
}

function removeElementFromEndOfArray(oldArray) {
  let newArray = oldArray.slice(0, oldArray.length-1);
  return newArray;
}