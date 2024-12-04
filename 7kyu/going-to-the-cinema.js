// INSTRUCTIONS:

// My friend John likes to go to the cinema. He can choose between system A and system B.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
// Example:
// If John goes to the cinema 3 times:

// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
// John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.

// MY SOLUTION:
// TRYING TO FIGURE OUT HOW TO LOOP THROUGH EACH ADDITION OF A TICKET THEN COMPARE TO SEE HOW MANY TICKET WE WOULD NEED IN ORDER FOR SYSTEM B TO BE LESS THAN SYSTEM A

function movie(card, ticket, perc) {
  // how much would it cost for system a
  const systemA = ticket
  //how much would it cost for system b
  const additionalB = ticket * perc * perc
  const systemB = card + ticket * perc
  //   how many system b do we need to buy for it to be less than system a
  // while (){

  // }
}

function movie(card, ticket, perc) {
  let count = 0
  while (ticket * count <= Math.ceil(card)) {
    count++
    card += ticket * perc ** count
  }
  return count
}

// OTHER SOLUTION:
function movie(card, ticket, perc) {
  var costA = (n = 0),
    costB = card
  while (Math.ceil(costB) >= costA) {
    costA += ticket
    costB += ticket * Math.pow(perc, ++n)
  }
  return n
}

const movie = (card, ticket, perc) => {
  let cnt = 0
  while (ticket * cnt <= Math.ceil(card)) {
    cnt++
    card += ticket * perc ** cnt
  }
  return cnt
}
