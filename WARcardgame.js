class Deck {
    constructor(){
        this.deck = [];
    }
    populate(){
        while (this.deck.length < 52){
            //for loop + increase integer value every 4 indices up to 13
        }
    }
    shuffle(){

    }
}

class Player {
    constructor(name){
        this.name = name;
    }
}

class WarMenu {
    constructor(){
        this.players = [];
        this.playerDeck1 = [];
        this.playerDeck2 = [];
        this.roundOfWar = [];
        this.selectedPlayerDeck = null;
    }
    start (){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPlayers();
                    break;
                case '2':
                    this.shuffle();
                    break;
                case '3':
                    this.dealCards();
                    break;
                case '4':
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
        2) Shuffle the Deck
        3) Deal Cards
        4) War!
         `);
    }

    createPlayers(){
        let name = prompt(`Please state your name:`);
        this.players.push(new Player(name));
        
    }

    shuffle(deck){
        for (let i = deck.length - 1; i > 0; i--) {     //this method pulled from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way,)%20%3D%3E%200.5%20%2D%20Math.
            const j = Math.floor(Math.random() * (i + 1));  //called Fisher-Yates Algorithm
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp; 
        }
    }

    dealCards(){
        for (let i = 0; i <= this.deck.length; i++){
            if (i % 2 == 0) {
                this.playerDeck1.push(this.deck[i]);
            }else {
                this.playerDeck2.push(this.deck[i]);
            }
        }
    }

    war(){
        this.roundOfWar.push(this.playerDeck1[0]);
        this.roundOfWar.push(this.playerDeck2[0]);
        if (this.roundOfWar[0] > this.roundOfWar[1]) {
            alert (`${this.roundOfWar[0]} is greater than ${this.roundOfWar[1]}.
            1 point to ${this.players[0]}`);
        }else if (this.roundOfWar[0] < this.roundOfWar[1]) {
            alert (`${this.roundOfWar[1]} is greater than ${this.roundOfWar[0]}.
            1 point to ${this.players[1]}`);
        }
    }

}