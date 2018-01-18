
function chocolateBars()
{
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
function addElementToBeginningOfArray(arrayReference, valueForNewElement)
{
  // declare a new array, passed value as the first pos, spread passed array
  let temporaryArray = [valueForNewElement, ...arrayReference];
  return temporaryArray;
}
function destructivelyAddElementToBeginningOfArray(arrayReference, element)
{
  // add element to beginn - mutated return
  // mutates array - but returns length() of array
  arrayReference.unshift(element);
  // return object separately
  return arrayReference;
}
function addElementToEndOfArray(arrayReference, element)
{
    let concatArray = arrayReference.concat(element);
    return concatArray;
}
function destructivelyAddElementToEndOfArray(arrayReference, element)
{
  // a mutation will occur
  // use the reference to permanently add a new final element
  arrayReference.push(element);
  return arrayReference;
}
function destructivelyAddElementToEndOfArray(arrayReference, element)
{
  // a mutation will occur
  // use the reference to permanently add a new final element
  arrayReference.push(element);
  return arrayReference;
}
function accessElementInArray(array, index)
{
  // return the value/integer: 3 which is pointed to by array index position
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  // mutation will occur
  array.shift()
  return array;
}
function removeElementFromBeginningOfArray(arrayReference)
{
  let copiedArray = arrayReference.slice(1, arrayReference.length);
  return copiedArray;
}
function destructivelyRemoveElementFromEndOfArray(arrayReference)
{
  // return the altered parameter
  // not the statement with pop()
  // which would only return
  // the new length of the array
  arrayReference.pop();
  return arrayReference;
}
function removeElementFromEndOfArray(arrayReference)
{
  let copy;
  copy = arrayReference.slice(0, arrayReference.length - 1)
  return copy;
}




