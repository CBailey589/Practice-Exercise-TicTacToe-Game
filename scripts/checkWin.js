// creates a reusable win function to check the 8 win conditions with
function areEqual() {
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        if (arguments[i] === undefined || arguments[i] !== arguments[i - 1])
            return false;
    }
    return true;
}

// creates a reusable function to display a winner alert and reset the game
// ***Player 1 & 2 are switched here, because the player gets switched by playervsplayer() BEFORE the game checks to see if anyone won. 
const winMessage = () => {
    if (player === 2) {
        alert(`Player ${player1Symbol} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${player1Symbol} has won the game!`;
        resetGame();
    } else if (player === 1) {
        alert(`Player ${player2Symbol} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${player2Symbol} has won the game!`;
        resetGame();
    }
}

// checks the 8 possible win conditions and stalemate condition
const checkWin = () => {
    if (areEqual(sCO["00"], sCO["10"], sCO["20"]) ||
        areEqual(sCO["01"], sCO["11"], sCO["21"]) ||
        areEqual(sCO["02"], sCO["12"], sCO["22"]) ||
        areEqual(sCO["02"], sCO["12"], sCO["22"]) ||
        areEqual(sCO["00"], sCO["01"], sCO["02"]) ||
        areEqual(sCO["10"], sCO["11"], sCO["12"]) ||
        areEqual(sCO["20"], sCO["21"], sCO["22"]) ||
        areEqual(sCO["00"], sCO["11"], sCO["22"]) ||
        areEqual(sCO["02"], sCO["11"], sCO["20"])) {
        winMessage();
    } else if ( Object.values(sCO).length === 9) {
        alert("Nobody wins. Play Again?")
        resetGame();
        player = 1;
        return;
    }
}
