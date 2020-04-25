// add solution here

import { abs } from 'math.js'

function theBeatlesPlay(musicians, instruments) {
  const playtime = []
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}


function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}


function iLoveTheBeatles(num){
  var love = [];
  do {
  love.push("I love the Beatles!")
  i++;
  }while (i < Math.abs(num - 15))
  return love
}

