function playerVsComputer(event) {
    // gets address of square
    let id = event.target.id;
    // strips-- from id
    let keyForSquaresClickedOnArray = event.target.id.replace("--", "");
    // gets square
    let thisSquare = document.getElementById(`${id}`);
    // check to see if square is already clicked
    if (thisSquare.innerHTML === "X" || thisSquare.innerHTML === "O") {
        alert("Click a different square")
        return;
    }
    // adds x to square class list for css
    thisSquare.classList.add(`${player1Symbol}`);
    // adds x to innerhtml
    thisSquare.innerHTML = player1Symbol;
    sCO[keyForSquaresClickedOnArray] = player1Symbol
    console.log(sCO);
    player = 2;
    checkWin();

    if (player === 2) {
        // Computer's Turn...
        // generates random number between 0 and 8
        let firstPick = Math.floor(Math.random() * 9);
        // chooses the square that matches the random number
        let squarePick = gameSquares[firstPick];
        // if the square has already been picked, it picks again until it finds an unpicked one
        while (squarePick.innerHTML === "X" || squarePick.innerHTML === "O") {
            firstPick = Math.floor(Math.random() * 9);
            squarePick = gameSquares[firstPick];
        }
        // same as the bottom part of Player vs Player
        keyForSquaresClickedOnArray = squarePick.id.replace("--", "");
        squarePick.classList.add(`${player2Symbol}`);
        squarePick.innerHTML = player2Symbol;
        sCO[keyForSquaresClickedOnArray] = player2Symbol;
        player = 1;
        checkWin();
    }
}