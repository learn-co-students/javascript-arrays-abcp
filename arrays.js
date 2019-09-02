var chocolateBars = ["snicker","hundred grand","kitkat","skittles"];
var array=[1];
function
addElementToBeginningOfArray(array,element)
{return [element,...array]}

addElementToBeginningOfArray("foo",array);

var array=[1];
function
destructivelyAddElementToBeginningOfArray(array,element) {array.unshift(element);return array}

destructivelyAddElementToBeginningOfArray(array,'foo');
var array=[1];
function
addElementToEndOfArray(array, element)
{return [...array,'foo']}

const array1 = [1,2,3];
function
destructivelyRemoveElementFromBeginningOfArray(array)
{array.shift(); return array}
destructivelyRemoveElementFromBeginningOfArray(array1);

var array = [1,2,3];
function
accessElementInArray(array, index) 
{return array[index]}

accessElementInArray(array,2);

var array = [1,2,3]

function
removeElementFromBeginningOfArray(array)
{return array.slice(1)}

removeElementFromBeginningOfArray(array);

var array =[1];
function
destructivelyAddElementToEndOfArray(array, element)
{array.push(element);return array}
destructivelyAddElementToEndOfArray(array, 'foo');

var array2=[1,2,3];
function
destructivelyRemoveElementFromEndOfArray(array)
{array.pop();return array}

destructivelyRemoveElementFromEndOfArray(array2);

const array3 = [1,2,3];
function
removeElementFromEndOfArray(array)
{return array.slice(0,array.length -1)}
removeElementFromEndOfArray(array3);

/*
describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})

*/


 