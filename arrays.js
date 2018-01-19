var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// Above was written correctly and passed initial test

function addElementToBeginningOfArray(myArray, element) {
return [element, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element)
  return myArray
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(0)
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, length - 1)
}
