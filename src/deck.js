let deck = (function () {

    let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    let suits = ['hearts', 'spades', 'diamonds', 'clubs'];

    let myDeck = [];

    let game = function () {
        reset();
        shuffle();
    }

    let deck = function () {
        return myDeck;
    }

    let reset = function () {
        let newDeck = new Array();

        suits.map((suit) => {
            cards.map((card) => {
                let newCard = {
                    Val: card,
                    Suit: suit
                }
                newDeck.push(newCard); // Add value and suit to each card
            }); // Push each card into array
        });

        myDeck = newDeck;
    }

    let deal = function () {
        let card = myDeck.pop();
        return card;
    }

    let shuffle = function () {
        let currentIndex = myDeck.length, tempVal, randomIndex; // 52
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex); // Anything between 1 - 52
            currentIndex -= 1;
            tempVal = myDeck[currentIndex];
            myDeck[currentIndex] = myDeck[randomIndex];
            myDeck[randomIndex] = tempVal; // Switch two places, repeat 52 times
        }
    }

    let getCard = function (card) {
        let ele = document.createElement('div');
        let value = document.createElement('p');
        value.innerHTML = card.Val;
        ele.className = 'card suit' + card.Suit.toLowerCase();
        ele.appendChild(value);
        return ele;
    }

    return {
        game: game,
        deck: deck,
        reset: reset,
        deal: deal,
        shuffle: shuffle,
        getCard: getCard
    }
})();


