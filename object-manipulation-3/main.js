console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'ObiWan', hand: [] },
  { name: 'Anakin', hand: [] },
  { name: 'Grievous', hand: [] },
  { name: 'Droid', hand: [] }
];

var cards = [];
var rankCard = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];
var suitCard = ['Diamond', 'Club', 'Spade', 'Heart'];

for (var f = 0; f < rankCard.length; f++) {
  var newObj = {};
  for (var g = 0; g < suitCard.length; g++) {
    newObj.rank = rankCard[f];
    newObj.suit = suitCard[g];
    cards.push(newObj);
    newObj = {};
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
    if (currentCard.rank === 'Ace') {
      total += 11;
    } else if (currentCard.rank === 'King') {
      total += 10;
    } else if (currentCard.rank === 'Queen') {
      total += 10;
    } else if (currentCard.rank === 'Jack') {
      total += 10;
    } else {
      total += currentCard.rank;
    }
  }
  if (total > winnerTotal) {
    winnerTotal = total;
    currentWinner = currentPlayer.name;
  }
}

console.log('The winner is: ', currentWinner);
