var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//function addElementToBeginningOfArray(array, element) {
// newArray =  
//}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}