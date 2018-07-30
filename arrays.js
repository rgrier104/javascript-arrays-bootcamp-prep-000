var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
    array = [element, ...array]
    return array
}

function addElementToEndOfArray(array, element) {
    var newarray2 = [...array, element]
    return newarray2
}
