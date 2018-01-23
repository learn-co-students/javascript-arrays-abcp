var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];
const array=[1];
function addElementToBeginningOfArray(array, element){
return array.unshift(element);
}

function addElementToBeginningOfArray(array, element){
  return ([element,...array]);
}


function destructivelyAddElementToBeginningOfArray(array, element){
  [element,...array];
  return array;
  }

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
}

function addElementToEndOfArray(array, element){
  return array.push(element);
}

function addElementToEndOfArray(array, element){
 return  [...array, element];
 }
 
function destructivelyAddElementToEndOfArray(array, element){
[...array, element];
  return array;
} 

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
 return array;
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,2);
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1,3);
}
function removeElementFromBeginningOfArray(array){
 return array.slice(1,3);
}
// function removeElementFromEndOfArray(array){
//   array.slice(-1);
//   return array;
  
// }

// function removeElementFromEndOfArray(array){
// array.pop();
// return array;
 
  
// }

function destructivelyRemoveElementFromEndOfArray(array){
array.pop();
return array;

 
}