let input = require("fs")
  .readFileSync("./02-input.txt", "utf-8")
  .split("\n")
  .map(e => {
    let limits = {"blue": 14, "green": 13, "red": 12}
    let gameID = Number(e.match(/(\d+):/)[1])
    let games = e.split(": ")[1].split("; ").map(e => e.split(', ').map(f=>f.split(" ")))
    let anyInvalidGames = false
    games.forEach(game => {
      if (game.filter(balls => balls[0] > limits[balls[1]]).length > 0) {
        anyInvalidGames = true
      }
    });
    return [gameID, anyInvalidGames]
  })
  .filter(e => e[1] == false)
  .map(e => e[0])
  .reduce((a,b) => a + b, 0)

console.log(input);