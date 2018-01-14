var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1];
var element = "foo";

function addElementToBeginningOfArray (array, element){
  var strtArray = [element,...array]
  return strtArray
};
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array
};
function addElementToEndOfArray(){
  var endArray = [...array, element]
  return endArray
};
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
};
var array = [1, 2, 3]
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1);
  return array
};
