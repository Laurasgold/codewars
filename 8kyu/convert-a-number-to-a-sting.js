// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// my solution

function numberToString(num) {
  return (num = String(num))
  // Return a string of the number here!
}
numberToString(123)

// other solutions
function numberToString(num) {
  return num.toString()
}

function numberToString(num) {
  // Return a string of the number here!
  return String(num)
}
