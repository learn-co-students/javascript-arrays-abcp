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

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
};
function removeElementFromBeginningOfArray(array){
  slcArray = array.slice(1);
  return slcArray
};
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
};
function removeElementFromEndOfArray(array){
  clsArray = array.slice(0,array.length - 1);
  return clsArray
};
function accessElementInArray(array, index){
  return array[index];
};
