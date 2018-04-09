var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//function addElementToBeginningOfArray(array, element) {
// newArray =  
//}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  newArray = array.shift()
  return newArray
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  newArray = array.pop()
  return newArray
}