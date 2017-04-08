var deck = require("./cards.js");

var clozeCardDeck = [];



var Cloze= function(fullText, partial){
    if (!fullText.includes(partial)) {
        console.log("Invalid entry");

    } else {
        this.fullText = fullText;
        this.partial = partial;
        this.cloze = fullText.replace(partial, " ... ");
        this.type = "cloze";
        deck.push(this);
        // console.log(deck);
    }
};


module.exports = Cloze;
