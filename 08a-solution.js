let input = require("fs")
  .readFileSync("./08-input.txt", "utf-8")
  .split("\n\n")

let directions = input[0].split('')
let maps = input[1].split('\n')
  .map(e => [e.slice(0,3), [e.slice(7,10), e.slice(12,15)]])
  .reduce((a, b) => {return{...a, [b[0]]: b[1]}} , {})
let steps = 0
let currentLocation = 'AAA'

while(currentLocation !== 'ZZZ') {
  let direction = directions[steps % directions.length]
  let map = maps[currentLocation]
  if(direction == 'L') currentLocation = map[0]
  else currentLocation = map[1]
  steps++
}
console.log(steps)