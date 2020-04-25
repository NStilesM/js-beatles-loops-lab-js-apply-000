// add solution here
const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}

const output = [] 
function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    output.push(facts[i] + "!!!");
    i++;
  }
  return output
}

