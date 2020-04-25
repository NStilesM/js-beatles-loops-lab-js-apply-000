// add solution here
const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}

const output = [] 
var i = 0;
function johnLennonFacts(facts){
  while (i < facts.length){
    output.push(facts[i] + "!!!");
    i++;
  }
  return output
}

