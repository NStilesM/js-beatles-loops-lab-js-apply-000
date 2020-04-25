// add solution here

import { abs } from 'math.js'

function theBeatlesPlay(musicians, instruments) {
  const playtime = []
  for (let i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}


function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(num){
  let i = 0;
  const love = [];
  do {
    love.push("I love the Beatles!")
    i++;
  } while (i < num - 15)
  return love
}

