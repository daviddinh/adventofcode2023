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

let currentLowest = 9007199254740990 // LOL

for (let j = 0; j < seeds.length; j+=2) {
  for (let i = 0; i < seeds[j+1]; i++) {
  let currentSeed = seeds[j] + i
    if (sts = seedToSoil.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - sts[1] + sts[0]
    }
    if (stf = soilToFertilizer.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - stf[1] + stf[0]
    }
    if (ftw = fertilizerToWater.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - ftw[1] + ftw[0]
    }
    if (wtl = waterToLight.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - wtl[1] + wtl[0]
    }
    if (ltt = lightToTemperature.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - ltt[1] + ltt[0]
    }
    if (tth = temperatureToHumidity.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - tth[1] + tth[0]
    }
    if (htl = humidityToLocation.find(e => (currentSeed >= e[1] && currentSeed < e[1] + e[2]))) {
      currentSeed = currentSeed - htl[1] + htl[0]
    }
    if(currentSeed < currentLowest) currentLowest = currentSeed
  }
}

console.log(currentLowest)

// NOTE: This solution works but takes ages, logging lowest between each of the seed pairs will save you a lot of time :)