let input = require("fs")
  .readFileSync("./09-input.txt", "utf-8")
  .split("\n").map(e => e.split(' ').map(Number))

let nextElements = []
let findDifferences = (arr) => {
  let differences = []
  for (let i = 0; i < arr.length - 1; i++) {
    differences.push(arr[i + 1] - arr[i])
  }
  return differences
}

for (let i = 0; i < input.length; i++) {
  let sequence = [input[i]];
  while (!(sequence[sequence.length-1].every(e => e == 0 ))){ 
    sequence.push(findDifferences(sequence.at(-1)))
  }
  while (sequence.length > 1) {
    let numberToAdd = sequence[sequence.length - 1].slice(-1)[0]
    sequence[sequence.length - 2] = [...sequence[sequence.length - 2], sequence[sequence.length - 2].slice(-1)[0] + Number(numberToAdd)]
    sequence = sequence.slice(0,sequence.length - 1)
  }

  nextElements.push(sequence[0].slice(-1)[0])
}

console.log(nextElements)
console.log(nextElements.reduce((a,b) => a + b , 0))
