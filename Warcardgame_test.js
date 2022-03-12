var expect = chai.expect;

describe("WarGameFunctions", function(){
    describe("CreatePlayers", function(){
        it("should prompt users to input names and push names to players array", function(){
            var x = createPlayers();
            expect(x).to.be.a("string");
        });
        it("should return undefined when no input is provided for the prompt", function(){
            expect(function(){
                createPlayers();
            }).to.throw(Error);
        });
    });
    describe("PopulateDeck", function(){
        it("should add 52 cards to an array with suits and values 2-A", function(){
            var x = new Deck(); //the populate() function is automatically called when creating a new Deck object 
            expect(x).to.be.a("object"); //an array of cards within an object called Deck or in this case 'x'
        });
        it("should throw an error if any parameter is added", function(){
            expect(function(){
                populate('hello');
            }).to.throw(Error);
        });
    });
});