var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elemAdd){
  // arr.shift();
  // const newArr = [elemAdd, ...arr);
  // return newArr;
  // arr[0] = elemAdd;
  // return arr;
  const newArr = [elemAdd, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elemAdd){
  // arr.shift();
  // arr = [elemAdd, ...arr];
  // return arr;
  // arr[0] = elemAdd;
  // return arr;
  arr.unshift(elemAdd);
  return arr;
}

function addElementToEndOfArray(arr, elemAdd){
  const newArr = [...arr, elemAdd];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elemAdd){
  arr.push(elemAdd);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr2 = arr.slice(1);
  return arr2;
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  var arr2 = arr.slice(0,-1);
  return arr2
}
