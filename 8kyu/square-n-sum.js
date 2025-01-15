// INSTRUCTIONS:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9
// MY SOLUTION:(was wrong because i missed putting the arrow part of the function in`)
function squareSum(numbers) {
  return (sum = numbers.reduce((acc, c) => acc + c * c, 0))
}

// OTHER SOLUTION:
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum
  }, 0)
}

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0)
}