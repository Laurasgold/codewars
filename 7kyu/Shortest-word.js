// INSTRUCTIONS:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// MYSOLUTION: (FAILED: need to use map, was having trouble getting it right)

function findShort(s) {
  let words = s.split(" ")
  return Math.min(words.length)
}

// OTHER SOLUTION:
function findShort(s) {
  let words = s.split(" ")
  return Math.min(words.length)
}

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  )
}
