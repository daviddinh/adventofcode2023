let calibrationValues = require("fs")
  .readFileSync("./01-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split('')
            .map(f => Number(f))
            .filter(g => !isNaN(g))
  )
  .map(h => Number([h[0], ...h.slice(-1)].join('')))
  
  

console.log(calibrationValues.reduce((a,b) => b + a, 0));