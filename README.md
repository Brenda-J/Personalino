
One way to improve our programming skills is game development. Here, we are going to build a personal casino arcade including a Blackjack engine that allows us to play against a dealer, who follows conventional house rules. 

## To remind ourselves, here are the rules for Blackjack:
* The player and dealer receives 2 cards each from a shuffled desk
* After the first 2 cards are dealt, the player is asked if they would like another card (called "hitting") or "stay". The player can keep hitting until they reach 21 (the objective is to get as close to 21 without going over or "busting"). 
* Numbers 2 to 10 are worth their values, face cards are worth 10, and Ace are worth 1 or 11. 
* The dealer must keep hitting until they get to 17. If they get above 17 without busting, they can stay.

![Screenshot (237)](https://user-images.githubusercontent.com/75908795/125553176-7f542c4b-a0b1-47c0-86d6-e4f1359baebd.png)

## The game is settled by these simple rules:
* If the player has blackjack, they win, unless the dealer also has blackjack, in which case the game is a tie.
* If the dealer busts and the player doesn't, the player wins.
* If the player busts, the dealer wins.
* If the player and the dealer both don't bust, whoever is closest to 21 wins.

![Screenshot (238)](https://user-images.githubusercontent.com/75908795/125553188-7d474c89-7041-4af0-8c90-8b47e5ca517b.png)


## Wireframes:
Blackjack will consist of a single screen with the table, game controls and any links on the home page. There will be 3 buttons, next hand, hit, and stay. 

## Technologies and/or APIs:
* Will optionally use Deck-of-Cards API to handle multideck use (Blackjack uses 6 decks)

## Timeline:
Day 1: 
* Setup all necessary modules and write a basic entry file. Research more on how to use any apis and have basic files set up. Learn how to render elements and brainstorm the logic for the game.

Day 2: 
* Start on the backend logic for blackjack. Continue learning about the api and how to implement it into our code by using a multideck system. Create a table.js and cards.js with basic and use these to render a card.

Day 3:
* Have the most basic css completed including the about me, rulebook, table and cards rendering. Ensure users are able to interact with buttons which correlate to what they do. Work more on game logic (ensure the correct type/amount of cards in the deck) and cleaning up any issues.

Day 4:
* Making sure the whole functionality of the game works and/or clean up any issues. Work a bit on styling.

## Bonus:
* Additional games to be added to our personal casino! (Poker, roulette, craps, slots, etc.)
* Add a money count system (Being able to bet against the computer)
