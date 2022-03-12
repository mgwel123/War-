const suits = ['spades', 'hearts', 'clubs', 'diamonds']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}



class Deck {
    constructor(cards = this.populate()){
        this.cards = cards;
    }

    numberOfCards() {
        return this.cards.length;
    }

    populate(){
       return suits.flatMap(suit => {
           return values.map( value => {
                return new Card(suit, value)
           });
       });
    }
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {     //this method pulled from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way,)%20%3D%3E%200.5%20%2D%20Math.
            const newIndex = Math.floor(Math.random() * (i + 1));  //called Fisher-Yates Algorithm
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue; 
        }
    }

    flip(){
        return this.cards.shift();
    }
}
//for testing purposes
//let newDeck = new Deck;
//newDeck.populate();
//console.log(newDeck); 
//newDeck.shuffle();
//console.log(newDeck);


class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
    }
}

class Menu {
    constructor(){
        this.players = [];
        this.playerDeck1 = [];
        this.playerDeck2 = [];
        this.cardCompare = [];
        this.discardPile = [];
        this.player1Total = 0;
        this.player2Total = 0;
    }

    start (){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPlayers();
                    break;
                case '2':
                    this.dealCards();
                    break;
                case '3':
                    this.war();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create Players
        2) Deal Cards
        3) War!
         `);
    }

    createPlayers(){
        let playerOne = prompt(`Player 1, please state your name:`);
        this.players.push(new Player(playerOne));
        let playerTwo = prompt(`Player 2, please state your name:`);
        this.players.push(new Player(playerTwo));
        
    }

    dealCards(){
        const deck = new Deck();
        deck.shuffle();

        const deckMidpoint = Math.ceil(deck.numberOfCards() / 2);
        this.playerDeck1 = new Deck(deck.cards.slice(0, deckMidpoint));
        this.playerDeck2 = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards()));

        console.log(this.playerDeck1);
        console.log(this.playerDeck2);
    }


    war(){
        let deck1Length = this.playerDeck1.cards.length;
        let deck2Length = this.playerDeck2.cards.length;
        while (deck1Length > 0 && deck2Length >0){
            this.cardCompare = this.playerDeck1.flip();
            this.cardCompare = this.playerDeck2.flip();
            console.log(this.cardCompare)

            this.cardCompare.splice(1, 0, this.playerDeck2[0]); 
            console.log(this.cardCompare);   
            if (this.cardCompare[0] > this.cardCompare[1]) {
                alert (`${this.cardCompare[0]} is greater than ${this.cardCompare[1]}.
                1 point to ${this.players[0]}`);
                this.player1Total += 1;

            }else if (this.cardCompare[0] < this.cardCompare[1]) {
                alert (`${this.cardCompare[1]} is greater than ${this.cardCompare[0]}.
                1 point to ${this.players[1]}`);
                this.player2Total += 1;
            }
        }
    }

}

let newMenu = new Menu;
newMenu.start();
