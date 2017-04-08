var deck = require("./cards.js");


var Basic= function(front, back){
    this.front = front;
    this.back = back;
    this.type = "basic";
    deck.push(this);
    // console.log(deck);
};


module.exports = Basic

