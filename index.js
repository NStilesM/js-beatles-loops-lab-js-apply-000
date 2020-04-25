// add solution here
const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}



var output = []
function johnLennonFacts(facts){
  i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

