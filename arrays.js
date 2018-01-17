var chocolateBars =["snickers","hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, n){
  var array
  array.unshift(n)
  return array
}

function addElementToBeginningOfArray(array, n){
  var array
  array=[n, ...array]
  return array
}

function  addElementToEndOfArray(array,n){
  var array
  array=[...array,n]
  return array
}

function destructivelyAddElementToEndOfArray(array,n){
  var array
  array.push(n)
  return array
}
function accessElementInArray(array,x){
  var array
  return array[x]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  var array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var array
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var array
  return   array.slice(0,array.length - 1)

}
