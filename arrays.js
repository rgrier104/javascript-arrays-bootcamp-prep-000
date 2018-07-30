var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [element, ...array]
    return array
}

function addElementToEndOfArray(array, element) {
    var newarray2 = [...array, element]
    return newarray2
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...array, element]
  return array
}

function accessElementInArray (array, index) {
  console.log(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array.slice(0,array.length - 1)
  return array
}
