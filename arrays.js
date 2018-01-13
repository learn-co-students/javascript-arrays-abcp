var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray1 = [element,...array]
  return newArray1
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array,element){
  var newArray2 = [...array,element]
  return newArray2
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array, index){
  var element1
  element1 = array[index]
  return element1
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var array4 = array
  array.shift()
  return array4
}
function removeElementFromBeginningOfArray(array){
  var array2 = array.slice(1)
  return array2
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
} 
function removeElementFromEndOfArray(array){
  var array3 = array.slice(0, array.length - 1)
  return array3
}