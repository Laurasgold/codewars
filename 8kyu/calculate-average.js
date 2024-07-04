// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// my solution
function findAverage(array) {
  let total = array.reduce((acc, c) => acc + c, 0)
  if (array.length === 0) {
    return 0
  } else {
    return total / array.length
  }
}

// other solution

var find_average = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}

function find_average(array) {
  if (array.length === 0) {
    return 0
  }
  var result = 0
  for (i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result / array.length
}
