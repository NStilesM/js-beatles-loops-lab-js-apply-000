// add solution here
const playtime = [];

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}


var i = 0;
function johnLennonFacts(facts){
  // while (i < facts.length){
  //   facts.push(facts[i] + "!!!");
  //   i++;
  for (i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

