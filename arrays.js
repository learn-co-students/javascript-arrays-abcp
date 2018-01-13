var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle" ]

function addElementToBeginningOfArray(array, element){
  var myArray = [ element, ...array]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
}

function addElementToEndOfArray(array, element){
  var myArray2 = [...array, element]
  return myArray2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var myArray4 = [array, index]
  return myArray4.length+1
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var myArray5 = [array]
  myArray5.shift()
  return myArray5
}

function removeElementFromBeginningOfArray(array){
  var myArray6 = [array]
  myArray6.slice(1)
  return myArray6
}

function destructivelyRemoveElementFromEndOfArray(array){
  var myArray7 = [array]
  var myArray71 = myArray7.pop() 
  myArray71
    
 // myArray7.slice(0, myArray7.length - 1)
//  return myArray7
}

function removeElementFromEndOfArray(array){
  var myArray8 = [array]
  myArray8.slice(0, myArray8.length -1)
  myArray8
}




