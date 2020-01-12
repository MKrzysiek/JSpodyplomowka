const cardDeck = require("./cardDeck.json");

/* Losowanie 5 kart */

const randomHand = (function() {
  let fiveCards = [];
  let randomCard;
  for (let i = 0; i < 5; i++) {
    randomCard = Math.floor(Math.random() * cardDeck.length);
    fiveCards.push(cardDeck.splice(randomCard, 1));
  }
  return fiveCards;
})();
const myHand = randomHand.flat();

// console.log(myHand[0], myHand[1], myHand[2], myHand[3], myHand[4]);

function check() {
  const sortByNumber = myHand.slice().sort(function(a, b) {
    return a.number - b.number;
  });
  const number = sortByNumber;
  console.log(number);

  const sortByColour = myHand
    .slice()
    .sort((a, b) => a.colour.localeCompare(b.colour));

  let colour = sortByColour;
  //   console.log(colour);
  let flush = colour[0] === colour[4];

  let c = number[4].number - number[0].number;
  //   console.log(c);
  let straight = c === 4;

  if ((number[0].number = 10 && straight && flush)) {
    console.log("Royal Flush");
  } else if (straight && flush) {
    console.log("Straight flush");
  } else if (
    number[0].number === number[3].number ||
    number[1].number === number[4].number
  ) {
    console.log("Four of a kind");
  } else if (
    (number[0].number === number[2].number &&
      number[3].number === number[4].number) ||
    (number[0].number === number[1].number &&
      number[2].number === number[4].number)
  ) {
    console.log("Full house");
  } else if (flush) {
    console.log("Flush");
  } else if (
    straight &&
    number[1].number !== number[2].number &&
    number[2].number !== number[3].number
  ) {
    console.log("Straight");
  } else if (
    number[0].number === number[2].number ||
    number[1].number === number[3].number ||
    number[2].number === number[4].number
  ) {
    console.log("Three of a kind");
  } else if (
    (number[0].number === number[1].number &&
      number[2].number === number[3].number) ||
    (number[1].number === number[2].number &&
      number[3].number === number[4].number) ||
    (number[0].number === number[1].number &&
      number[3].number === number[4].number)
  ) {
    console.log("Two pair");
  } else if (
    number[0].number === number[1].number ||
    number[1].number === number[2].number ||
    number[2].number === number[3].number ||
    number[3].number === number[4].number
  ) {
    console.log("Pair");
  } else {
    console.log("High card");
  }
}

check();
