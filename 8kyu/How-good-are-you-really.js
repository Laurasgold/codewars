// INSTRUCTION:
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// MY SOLUTION:

function betterThanAverage(classPoints, yourPoints) {
  let addedPoints = classPoints.reduce((a, b) => a + b, 0)
  let number = classPoints.length

  if (addedPoints / number < yourPoints) {
    return true
  } else {
    return false
  }
}

// OTHER SOLUTION:

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0
  for (var i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i]
  }
  classAvg = classAvg / classPoints.length
  return yourPoints > classAvg
}
