// Resets the gameboard to empty squares. Deletes key/value pairs from sCO
 resetGame = () => {
    let sCOKeys = Object.keys(sCO);
    sCOKeys.forEach(key => {
        delete sCO[key];
    });
    // selects squares that player X clicked on
    let xSquares = document.querySelectorAll(".X");
    // removes the inner HTML of X and the class of X to reset the square
    xSquares.forEach(xSquare => {
        xSquare.classList.remove("X");
        xSquare.innerHTML = "";
    });
    // same as the X squares, but with O squares
    let oSquares = document.querySelectorAll(".O");
    oSquares.forEach(oSquare => {
        oSquare.classList.remove("O");
        oSquare.innerHTML = "";
    });
    // resets message telling which player is up to show that Player X is up
    document.querySelector('#playerTurn').innerHTML = "Player X you're up!";
    // resets Player X as the default player for the next game
    player = 1;
}