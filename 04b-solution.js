let input = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n")
  .map((e,i)=> {
    let winningNumbers = 
      new Set(e.split("| ")[0].split(': ')[1].split(" ").map(Number)
        .filter(f => f!=0))
    let ourNumbers =
      new Set(e.split("| ")[1].split(" ").map(Number).filter(f => f!=0))
    let matches = new Set(
      [...winningNumbers].filter(f => ourNumbers.has(f)))
    return [i, matches.size]
  })

let counts = new Array(input.length).fill(1)

counts.forEach((e, i, arr) =>  {
  for (let j = 1; j <= e; j++) {
    for (let k = 1; k <= input[i][1]; k++) {
      arr[i+k]++
    }
  }
})

console.log(counts.reduce((a,b) => a+b,0))