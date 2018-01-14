
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(originalArray, element){
  var newArray = [element, ...originalArray];
    return newArray;
}

addElementToBeginningOfArray([1], 'f', 'o', 'o')



function destructivelyAddElementToBeginningOfArray(originalArray, element){
  originalArray.unshift(element);
      return originalArray;
}

destructivelyAddElementToBeginningOfArray('foo', 1)

function addElementToEndOfArray(originalArray, element){
  var newArray = [...originalArray, element];
    return newArray;
}

function destructivelyAddElementToEndOfArray(originalArray, element){
  originalArray.push(element);
    return originalArray
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(originalArray, element){
    originalArray.shift(element);
      return originalArray;
}

function removeElementFromBeginningOfArray(array){
    var newArray = array.slice(1);
      return newArray;
}

function destructivelyRemoveElementFromEndOfArray(originalArray, element){
    originalArray.pop(element);
      return originalArray;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
    return newArray;
}

