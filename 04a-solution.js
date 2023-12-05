let input = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n")
  .map(e => {
    let winningNumbers = 
      new Set(e.split("| ")[0].split(': ')[1].split(" ").map(Number).filter(f => f!=0))
    let ourNumbers =
      new Set(e.split("| ")[1].split(" ").map(Number).filter(f => f!=0))
    let matches = new Set(
      [...winningNumbers].filter(f => ourNumbers.has(f)))

    return Math.pow(2, matches.size-1)
  })
  .filter(e => e > 0.5)

console.log(input.reduce((a,b) => a + b, 0))