let input = require("fs")
  .readFileSync("./03-input.txt", "utf-8")
  .split("\n")

let nonSymbols =['0','1','2','3','4','5','6','7','8','9','.']
let numbersToSum = []
let symbolLocations = []

numbersList = input.map(line => line.match(/\d+/g))

input.forEach((row, i) => {
  row.split('').forEach((ele, j) => {
    if(nonSymbols.indexOf(ele) == -1){
      symbolLocations.push([i,j].join('-'))
    }
  })
})

let allNumbers = []

numbersList.forEach((e, i) => {
  if (e !== null){
    e.forEach(number => {
      allNumbers.push(Number(number))
      let startingCol = input[i].indexOf(number)
      let locationsToCheck = []

      locationsToCheck.push([i, startingCol - 1].join('-'))
      locationsToCheck.push([i, startingCol + number.length].join('-'))
      
      for (let index = -1; index <= number.length; index++) {
        locationsToCheck.push([i - 1, startingCol + index].join('-'))
        locationsToCheck.push([i + 1, startingCol + index].join('-'))
      }

      let locationMatches = locationsToCheck.filter(e => symbolLocations.indexOf(e) !== -1)
      console.log(number, locationMatches)
      if (locationMatches.length == 0) {
        numbersToSum.push(Number(number))
      } else {
        // console.log(i, number)
      }
      // console.log(number, locationsToCheck)
    })
  }
})

// console.log(input)

// console.log(symbolLocations.length)
console.log(numbersToSum.reduce((a,b) => a+b, 0))
console.log(allNumbers.reduce((a,b) => a+b, 0))