var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(one, two){
arraytwo = [two, ...one]
  return arraytwo;
}


function destructivelyAddElementToBeginningOfArray(one, two){
 one.unshift(two)
 return one;
}

function addElementToEndOfArray(one, two){
arraytwo = [...one,two]
  return arraytwo;
}

function destructivelyAddElementToEndOfArray(one, two){
 one.push(two)
 return one;
}

function accessElementInArray(array, number){
  return array[number];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  arraytwo = array.slice(1);
  return arraytwo;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  arraytwo = array.slice(0, array.length -1)
  return arraytwo;
}








