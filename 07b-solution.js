// NOTE TO SELF - READ THE QUESTION INSTEAD OF ASSUMING YOU KNOW 
// THE RULES OF CAMEL CARDS - NOT THE SAME AS POKER...
let input = require("fs")
  .readFileSync("./07-input.txt", "utf-8")
  .split("\n")

let cardOrder =  ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J']
let handOrder = ['5kind','4kind','fh','3kind','2pair','pair','hc']

let hands = 
  input
    .map(e => [
      e.split(' ')[0],
      e.split(' ')[0]
        .split("")
        .sort((a,b) => cardOrder.indexOf(a) - cardOrder.indexOf(b)), 
        Number(e.split(' ')[1])
    ])
    .map(hand => {
      let cardsObj = {}
      hand[1].forEach(e => cardsObj[e] ? cardsObj[e] += 1 : cardsObj[e] = 1)
      return hand.concat(cardsObj)
    })
    .map(hand => {
      let handType = 'hc'
      let jokers = hand[3]['J'] || 0
      if (jokers > 0) {
        let handWithoutJs = {...hand[3]}
        delete handWithoutJs.J
        let largestCount = Math.max(...Object.values(handWithoutJs))
        let lowestCount = Math.min(...Object.values(handWithoutJs))
        if ((largestCount + jokers == 5) || jokers == 5) handType = '5kind'
        else if (largestCount + jokers == 4) handType = '4kind'
        else if (largestCount + jokers == 3) {
          if (lowestCount == 2) handType = 'fh'
          else handType = '3kind'
        } else if (largestCount == 1 && jokers == 1) handType = 'pair'
      } else {
        if (Object.values(hand[3]).indexOf(5) !== -1) {
          handType = '5kind'
        } else if (Object.values(hand[3]).indexOf(4) !== -1) {
          handType = '4kind'
        } else if (Object.values(hand[3]).indexOf(3) !== -1) {
          if (Object.values(hand[3]).indexOf(2) !== -1) {
            handType = 'fh'
          } else {
            handType = '3kind'
          }
        } else if (Object.values(hand[3]).indexOf(2) !== -1) {
          if (Object.values(hand[3]).lastIndexOf(2) !== Object.values(hand[3]).indexOf(2)) {
            handType = '2pair'
          } else {
            handType = 'pair'
          }
        }
      }
      return hand.concat(handType)
    })


// console.log(hands)
let sortedHands = hands
  .sort((a, b) => {
    let sameHand = handOrder.indexOf(a[4]) - handOrder.indexOf(b[4])
    if (sameHand !== 0) return sameHand
    let oneHand = a[0]
    let otherHand = b[0]

    for (let i = 0; i < oneHand.length; i++) {
      if(cardOrder.indexOf(oneHand[i]) > cardOrder.indexOf(otherHand[i])) return 1
      if(cardOrder.indexOf(oneHand[i]) < cardOrder.indexOf(otherHand[i])) return -1
    }
  })
  .reverse()

console.log(sortedHands.map((e,i) => e[2] * (i+1)).reduce((a,b) => a + b, 0))