// add solution here
const playtime = []

function theBeatlesPlay(musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    playtime.push(musicians[i] + " plays " + instruments[i])
  }
  return playtime
}

var i = 0;

function johnLennonFacts(facts){
  let arrayLength = facts.length;
  do {
    facts[i] = facts[i] + "!!!";
    i++;
  } while (i < arrayLength)
  return facts
}

