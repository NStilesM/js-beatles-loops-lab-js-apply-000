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
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

var i = 0
function iLoveTheBeatles(num){
  var love = [];
  var ammount = Math.abs((num - 15));
  do {
  love.push("I love the Beatles!")
  i++;
  }while (i < ammount)
  return love
}

