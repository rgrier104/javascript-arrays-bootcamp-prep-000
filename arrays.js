var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    const array = [element, ...array]
    return array
}

function addElementToEndOfArray(array, element) {
    var newarray2 = [...array, element]
    return newarray2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray (array, index) {
  console.log(array[index])
}
