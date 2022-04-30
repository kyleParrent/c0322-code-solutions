console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'ObiWan', hand: [] },
  { name: 'Anakin', hand: [] },
  { name: 'Grievous', hand: [] },
  { name: 'Droid', hand: [] }
];

var cards = [
  { rank: 'Ace', suit: 'Diamonds' },
  { rank: 'Ace', suit: 'Hearts' },
  { rank: 'Ace', suit: 'Clubs' },
  { rank: 'Ace', suit: 'Spades' },
  { rank: 'King', suit: 'Diamonds' },
  { rank: 'King', suit: 'Hearts' },
  { rank: 'King', suit: 'Clubs' },
  { rank: 'King', suit: 'Spades' },
  { rank: 'Queen', suit: 'Diamonds' },
  { rank: 'Queen', suit: 'Hearts' },
  { rank: 'Queen', suit: 'Clubs' },
  { rank: 'Queen', suit: 'Spades' },
  { rank: 'Jack', suit: 'Diamonds' },
  { rank: 'Jack', suit: 'Hearts' },
  { rank: 'Jack', suit: 'Clubs' },
  { rank: 'Jack', suit: 'Spades' },
  { rank: '10', suit: 'Diamonds' },
  { rank: '10', suit: 'Hearts' },
  { rank: '10', suit: 'Clubs' },
  { rank: '10', suit: 'Spades' },
  { rank: '9', suit: 'Diamonds' },
  { rank: '9', suit: 'Hearts' },
  { rank: '9', suit: 'Clubs' },
  { rank: '9', suit: 'Spades' },
  { rank: '8', suit: 'Diamonds' },
  { rank: '8', suit: 'Hearts' },
  { rank: '8', suit: 'Clubs' },
  { rank: '8', suit: 'Spades' },
  { rank: '7', suit: 'Diamonds' },
  { rank: '7', suit: 'Hearts' },
  { rank: '7', suit: 'Clubs' },
  { rank: '7', suit: 'Spades' },
  { rank: '6', suit: 'Diamonds' },
  { rank: '6', suit: 'Hearts' },
  { rank: '6', suit: 'Clubs' },
  { rank: '6', suit: 'Spades' },
  { rank: '5', suit: 'Diamonds' },
  { rank: '5', suit: 'Hearts' },
  { rank: '5', suit: 'Clubs' },
  { rank: '5', suit: 'Spades' },
  { rank: '4', suit: 'Diamonds' },
  { rank: '4', suit: 'Hearts' },
  { rank: '4', suit: 'Clubs' },
  { rank: '4', suit: 'Spades' },
  { rank: '3', suit: 'Diamonds' },
  { rank: '3', suit: 'Hearts' },
  { rank: '3', suit: 'Clubs' },
  { rank: '3', suit: 'Spades' },
  { rank: '2', suit: 'Diamonds' },
  { rank: '2', suit: 'Hearts' },
  { rank: '2', suit: 'Clubs' },
  { rank: '2', suit: 'Spades' }
];

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
