// add solution here
const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}


var i = 0;
var output = []
function johnLennonFacts(facts){
  while (i < facts.length){
    output[i] = facts[i] + "!!!";
    i++;
  }
  return output
}

