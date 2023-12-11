let input = require("fs")
  .readFileSync("./08-input.txt", "utf-8")
  .split("\n\n")

let directions = input[0].split('')
let originalMaps = input[1].split('\n')
  .map(e => [e.slice(0,3), [e.slice(7,10), e.slice(12,15)]])
  .reduce((a, b) => {return{...a, [b[0]]: b[1]}} , {})
let currentLocations = Object.keys(originalMaps).filter(e => e.slice(-1) == 'A')
let steps = new Array(currentLocations.length).fill(0)

for (let i = 0; i < currentLocations.length; i++) {
  let currentLocation = currentLocations[i];
  while(currentLocation.slice(-1) !== 'Z') {
    let direction = directions[steps[i] % directions.length]
    let map = originalMaps[currentLocation]
    if(direction == 'L') currentLocation = map[0]
    else currentLocation = map[1]
    steps[i]++
  }
}

console.log(steps) // LCM of these numbers
