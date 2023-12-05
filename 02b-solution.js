let input = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(e => {
    let gameID = Number(e.match(/(\d+):/)[1])
    let games = e.split(": ")[1].split("; ").map(e => e.split(', ').map(f=>f.split(" ")))
    
    let required = {"blue": 1, "green": 1, "red": 1}
    games.forEach(game => {
      game.forEach(balls => {
        if (Number(balls[0]) >= required[balls[1]]) {
          // console.log('balls', balls)
          // console.log('required', required)
          required[balls[1]] = Number(balls[0])
        }
      })
    });
    return [gameID, required.blue * required.green * required.red]
  })
  .map(e => e[1])
  .reduce((a,b) => a + b, 0)

console.log(input)