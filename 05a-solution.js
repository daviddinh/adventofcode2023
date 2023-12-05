let input = require("fs")
  .readFileSync("./05-input.txt", "utf-8")
  .split("\n\n")

let seeds = input[0].split(": ")[1].split(" ").map(Number)
let seedToSoil = input[1].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let soilToFertilizer = input[2].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let fertilizerToWater = input[3].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let waterToLight = input[4].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let lightToTemperature = input[5].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let temperatureToHumidity = input[6].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))
let humidityToLocation = input[7].split(":\n")[1].split("\n").map(e=>e.split(" ").map(Number))

for (let i = 0; i < seeds.length; i++) {
  if (sts = seedToSoil.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - sts[1] + sts[0]
  }
  if (stf = soilToFertilizer.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - stf[1] + stf[0]
  }
  if (ftw = fertilizerToWater.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - ftw[1] + ftw[0]
  }
  if ( wtl = waterToLight.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - wtl[1] + wtl[0]
  }
  if (ltt = lightToTemperature.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - ltt[1] + ltt[0]
  }
  if (tth = temperatureToHumidity.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - tth[1] + tth[0]
  }
  if (htl = humidityToLocation.find(e => (seeds[i] >= e[1] && seeds[i] < e[1] + e[2]))) {
    seeds[i] = seeds[i] - htl[1] + htl[0]
  }
}
console.log(Math.min(...seeds))
