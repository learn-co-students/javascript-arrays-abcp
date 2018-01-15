
var chocolateBars = ['snickers','hundred grand', 'kitkat', 'skittles'] ;

function addElementToBeginningOfArray (numArray,num1) {
  //var newNumArray = [num1,...numArray.unshift('num1')];
  //return newNumArray;
  
  return [num1,...numArray];
  
}

function addElementToEndOfArray (numArray, num1) {
  return [...numArray, num1];
  
}

function destructivelyAddElementToEndOfArray (numArray,num1) {
  
  numArray.push(num1);
  return numArray;
}

function destructivelyAddElementToBeginningOfArray (numArray,num1) {
  numArray.unshift(num1);
  return numArray;
  
}

function accessElementInArray (numArray,num1) {
  return numArray[num1];
}

function destructivelyRemoveElementFromBeginningOfArray (numArray) {
  numArray.shift();
  return numArray;
  
}

function removeElementFromBeginningOfArray (numArray) {
  return numArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (numArray) {
  numArray.pop();
  return numArray;
  
}

function removeElementFromEndOfArray (numArray) {
  return numArray.slice(0,numArray.length - 1);
  
}



var items = ["1","2","3","4","5"];
console.log(items);
console.log(items.unshift("67"));
console.log(items);



