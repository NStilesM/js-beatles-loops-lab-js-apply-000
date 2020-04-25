// add solution here

import { abs } from math.js 

const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}

var i = 0;

function johnLennonFacts(facts){
  var truths = []
  while (i < facts.length){
    truths.push(facts[i] + "!!!");
    i++;
  }
  return truths
}

var i = 0
function iLoveTheBeatles(num){
  var love = [];
  do {
  love.push("I love the Beatles!")
  i++;
  }while (i < Math.abs(num - 15))
  return love
}

