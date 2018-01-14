// TODO-1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
// TODO-2
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
// TODO-3
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
// TODO-4
function accessElementInArray(array, index) {
  return array[index]
}
// TODO-5
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
// TODO-6
function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}
// TODO-7
function destructivelyRemoveElementFromEndOfArray(array, element) {
array.pop(element)
return array
}
// TODO-8
function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1)
}

