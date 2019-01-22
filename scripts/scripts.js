// makes array of both game types
const allRadios = document.querySelectorAll(".radioInfo")

// makes an object to hold the address/value for all 9 squares
const gameSquares = document.querySelectorAll(".square")
// sCO is shorthand for squaresClickedOn
const sCO = {};

// sets player 1 as default player
let player = 1;

// sets default game type to PVP
let gameType = "PvP";

const player1Symbol = "X";
const player2Symbol = "O";

makeEventListeners();

// checks to see what game tpe the user picks
for (button of allRadios) {
    button.addEventListener(
        "click",
        (event) => {
            if (event.target.id === "PvP") {
                gameType = "PvP"
                resetGame();
                clearEventListeners();
                makeEventListeners();
            } else if (event.target.id === "PvC") {
                gameType = "PvC"
                resetGame();
                clearEventListeners();
                makeEventListeners();
            }
        }
    )
}
