chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, ele){
  choco = [ele, ...chocolateBars]
  return choco
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, ele){
  chocolateBars.unshift(ele)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, ele){
  choco = [...chocolateBars, ele]
  return choco
}

function destructivelyAddElementToEndOfArray(chocolateBars, ele){
  chocolateBars.push(ele)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length-1)
}

