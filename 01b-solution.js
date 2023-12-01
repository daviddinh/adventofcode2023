let calibrationValues = require("fs")
  .readFileSync("./01-input.txt", "utf-8")
  .split("\n")
  .map(e => 
    [[ 
      [e.indexOf('one'), 1],
      [e.indexOf('1'), 1] ,
      [e.indexOf('two'), 2],
      [e.indexOf('2'), 2],
      [e.indexOf('three'), 3],
      [e.indexOf('3'), 3],
      [e.indexOf('four'), 4],
      [e.indexOf('4'), 4],
      [e.indexOf('five'), 5],
      [e.indexOf('5'), 5],
      [e.indexOf('six'), 6],
      [e.indexOf('6'), 6],
      [e.indexOf('seven'), 7],
      [e.indexOf('7'), 7],
      [e.indexOf('eight'), 8],
      [e.indexOf('8'), 8],
      [e.indexOf('nine'), 9],
      [e.indexOf('9'), 9] ,
    ].filter(f => f[0] !== -1)
    .sort((a,b) => a[0] - b[0])
    [0][1],
    [ 
      [e.lastIndexOf('one'), 1],
      [e.lastIndexOf('1'), 1] ,
      [e.lastIndexOf('two'), 2],
      [e.lastIndexOf('2'), 2],
      [e.lastIndexOf('three'), 3],
      [e.lastIndexOf('3'), 3],
      [e.lastIndexOf('four'), 4],
      [e.lastIndexOf('4'), 4],
      [e.lastIndexOf('five'), 5],
      [e.lastIndexOf('5'), 5],
      [e.lastIndexOf('six'), 6],
      [e.lastIndexOf('6'), 6],
      [e.lastIndexOf('seven'), 7],
      [e.lastIndexOf('7'), 7],
      [e.lastIndexOf('eight'), 8],
      [e.lastIndexOf('8'), 8],
      [e.lastIndexOf('nine'), 9],
      [e.lastIndexOf('9'), 9] ,
    ].filter(f => f[0] !== -1)
    .sort((a,b) => b[0] - a[0])
    [0][1],]
  ).map(g => Number(g.join('')))

console.log(calibrationValues.reduce((a,b) => b + a, 0))