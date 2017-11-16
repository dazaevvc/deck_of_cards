// // 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// // Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
// function deck_o_cards() {
//   var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
//   var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
//
//   var cards = []; // deck
//   var shuffledCards = []; // deck shuffled
//
//   // Make 52 card objects and store them in the "cards" array
//   // Hint: use 2 for loops
 function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops

  for (var x = 0; x < values.length; x++){
     for (var y = 0; y < suits.length; y++){
       var cardProps = {
         suite: suits[y],
         value: values[x]
       };
        cards.push(cardProps);
     }
   }
   console.log(cards);
}
deck_o_cards();
//   }

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

shuffle(cards)
