let input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("\n")
let times = input[0].match(/\d+/g).map(Number)
let distances = input[1].match(/\d+/g).map(Number)

let waysToWin = times.map((totalTime, i) => {
  let waysToWinForTime = 0
  for (let holdTime = 0; holdTime <= totalTime; holdTime++) {
    if (holdTime * (totalTime - holdTime) > distances[i]) waysToWinForTime++
  }
  return waysToWinForTime
})

console.log(waysToWin.reduce((a,b) => a * b, 1))