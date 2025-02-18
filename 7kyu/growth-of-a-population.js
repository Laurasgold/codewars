// Instructions:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// my solution: (wrong)

function nbYear(p0, percent, aug, p) {
  //   let i = p0
  for (let i = 0; i <= p; i++) {
    let total = i + i * percent + aug
    return total
  }
}
// was so close, but missing a couple pieces getting confused in the for loop
function nbYear(p0, percent, aug, p) {
  let years = 0
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug)
  }
  return years
}

// other solution:
function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug)
  }
  return years
}

function nbYear(p0, percent, aug, p) {
  var count = 0
  while (p0 < p) {
    p0 = Math.floor((1 + percent / 100) * p0 + aug)
    count++
  }
  return count
}
