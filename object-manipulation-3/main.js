console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'ObiWan', hand: [] },
  { name: 'Anakin', hand: [] },
  { name: 'Grievous', hand: [] },
  { name: 'Droid', hand: [] }
];

var cards = [];
var rankCard = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
var suitCard = ['Diamond', 'Club', 'Spade', 'Heart'];

for (var f = 0; f < rankCard.length; f++) {
  var newObj = {};
  for (var g = 0; g < suitCard.length; g++) {
    newObj.rank = rankCard[f];
    newObj.suit = suitCard[g];
    cards.push(newObj);
  }

}

var shuffCards = _.shuffle(cards);

for (var i = 0; i < players.length; i++) {
  players[i].hand = _.sampleSize(shuffCards, 2);
  shuffCards = _.pullAll(shuffCards, players[i].hand);
}

var currentWinner = '';
var winnerTotal = 0;

for (var y = 0; y < players.length; y++) {
  var currentPlayer = players[y];
  var currentHand = currentPlayer.hand;
  var total = 0;
  for (var u = 0; u < currentHand.length; u++) {
    var currentCard = currentHand[u];
    for (var x in currentCard) {
      if (currentCard[x] === 'Ace') {
        total += 11;
      } else if (currentCard[x] === 'King') {
        total += 10;
      } else if (currentCard[x] === 'Queen') {
        total += 10;
      } else if (currentCard[x] === 'Jack') {
        total += 10;
      } else if (currentCard[x] === '10') {
        total += 10;
      } else if (currentCard[x] === '9') {
        total += 9;
      } else if (currentCard[x] === '8') {
        total += 8;
      } else if (currentCard[x] === '7') {
        total += 7;
      } else if (currentCard[x] === '6') {
        total += 6;
      } else if (currentCard[x] === '5') {
        total += 5;
      } else if (currentCard[x] === '4') {
        total += 4;
      } else if (currentCard[x] === '3') {
        total += 3;
      } else if (currentCard[x] === '2') {
        total += 2;
      }
    }
  }
  if (total > winnerTotal) {
    winnerTotal = total;
    currentWinner = currentPlayer.name;
  }
}

console.log('The winner is: ', currentWinner);
