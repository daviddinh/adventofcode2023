let input = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("\n")
let time = Number(input[0].match(/\d+/g).join(""))
let distance = Number(input[1].match(/\d+/g).join(""))

let waysToWin = 0
for (let holdTime = 0; holdTime <= time; holdTime++) {
  if (holdTime * (time - holdTime) > distance) waysToWin++
}

console.log(waysToWin)