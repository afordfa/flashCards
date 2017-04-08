var basic = require("./basic");
var cloze = require("./cloze");


var inquirer = require("inquirer");

mainMenu();

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Create basic flashcard", "Create cloze flashcard", "Exit"],
            name: "menu"
        }
    ]).then(function(menuResp){
        switch(menuResp.menu){
        case "Create basic flashcard":
            basicCard();
            break;
        case "Create cloze flashcard":
            clozeCard();
            break;
        case "Exit":
            break;
        default:
            console.log("Invalid choice. Please select again");
            mainMenu();
            break;
        }
    });
}



function study(){
    console.log("studying");
}

function basicCard(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter text for the front of the flashcard.",
            name: "basicFront"
        },
        {
            type: "input",
            message: "Enter text for the back of the flashcard.",
            name: "basicBack"
        }
    ]).then(function(basicResp){
        var basicCard = new basic(basicResp.basicFront, basicResp.basicBack);
        mainMenu();
    });
}

function clozeCard(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the full text for the flashcard.",
            name: "clozeFull"
        },
        {
            type: "input",
            message: "Enter the partial text for the flashcard.",
            name: "clozePartial"
        }
    ]).then(function(clozeResp){
            var clozeCard = new cloze(clozeResp.clozeFull, clozeResp.clozePartial); 
            mainMenu();
    });
}


