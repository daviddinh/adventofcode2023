// DONT USE THIS ONE UNLESS YOU WANT ACTUAL POKER SORTING....
let input = require("fs")
  .readFileSync("./07-input.txt", "utf-8")
  .split("\n")

let cardOrder =  ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
let handOrder = ['5kind','4kind','fh','3kind','2pair','pair','hc']

let hands = 
  input
    .map(e => [
      e.split(' ')[0]
        .split("")
        .sort((a,b) => cardOrder.indexOf(a) - cardOrder.indexOf(b)), 
        Number(e.split(' ')[1])
    ])
    .map(hand => {
      let cardsObj = {}
      hand[0].forEach(e => cardsObj[e] ? cardsObj[e] += 1 : cardsObj[e] = 1)
      return hand.concat(cardsObj)
    })
    .map(hand => {
      let handType = 'hc'
      if (Object.values(hand[2]).indexOf(5) !== -1) {
        handType = '5kind'
      } else if (Object.values(hand[2]).indexOf(4) !== -1) {
        handType = '4kind'
      } else if (Object.values(hand[2]).indexOf(3) !== -1) {
        if (Object.values(hand[2]).indexOf(2) !== -1) {
          handType = 'fh'
        } else {
          handType = '3kind'
        }
      } else if (Object.values(hand[2]).indexOf(2) !== -1) {
        if (Object.values(hand[2]).lastIndexOf(2) !== Object.values(hand[2]).indexOf(2)) {
          handType = '2pair'
        } else {
          handType = 'pair'
        }
      }
      return hand.concat(handType)
    })

// console.log(hands)
let sortedHands = hands
  .sort((a, b) => {
    let sameHand = handOrder.indexOf(a[3]) - handOrder.indexOf(b[3])
    if (sameHand !== 0) return sameHand
    let oneHand = 
      Object.entries(a[2])
        .sort((c, d) => (d[1] - c[1]) || (cardOrder.indexOf(c[0]) - cardOrder.indexOf(d[0]) ))
    let otherHand = 
      Object.entries(b[2])
        .sort((c, d) => (d[1] - c[1]) || (cardOrder.indexOf(c[0]) - cardOrder.indexOf(d[0]) ))

    for (let i = 0; i < oneHand.length; i++) {
      if(cardOrder.indexOf(oneHand[i][0]) > cardOrder.indexOf(otherHand[i][0])) return 1
      if(cardOrder.indexOf(oneHand[i][0]) < cardOrder.indexOf(otherHand[i][0])) return -1
    }
  })
  .reverse()
  // .map((e,i) => [...e, i+1]).map( e => [e[1],e[4]] ).map(e => e[0] * e[1])


console.log(JSON.stringify(sortedHands.map(e => [e[0].join(""),e[1]])))
// console.log(sortedHands)
console.log(sortedHands.reduce((acc, card, index) =>  acc + (+card[1]*(index+1)), 0))