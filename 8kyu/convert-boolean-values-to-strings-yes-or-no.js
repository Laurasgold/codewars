// INSTRUCTIONS:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// MY SOLUTION:
function boolToWord(bool) {
  let result = bool === true ? "Yes" : "No"
  return result
}

// OTHER SOLUTION:

function boolToWord(bool) {
  return bool ? "Yes" : "No"
}

function boolToWord(bool) {
  if (bool) {
    return "Yes"
  } else {
    return "No"
  }
}
