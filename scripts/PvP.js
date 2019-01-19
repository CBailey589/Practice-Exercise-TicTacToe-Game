const playerVsPlayer = () => {
    for (square of gameSquares) {
        square.addEventListener(
            "click",
            (event) => {
                // gets address of square
                let id = event.target.id;
                // strips -- from id
                let keyForSquaresClickedOnArray = event.target.id.replace("--", "");
                // gets square
                let thisSquare = document.getElementById(`${id}`);
                if (thisSquare.innerHTML === "X" || thisSquare.innerHTML === "O") {
                    alert("Click a different square")
                } else {
                    if (player === 1) {
                        // adds x to square class list for css
                        thisSquare.classList.add(`${player1Symbol}`);
                        // adds x to innerhtml
                        thisSquare.innerHTML = player1Symbol;
                        sCO[keyForSquaresClickedOnArray] = player1Symbol
                        console.log(sCO);
                        // changes the announcement above the board
                        document.querySelector('#playerTurn').innerHTML = "Player O you're up";
                        // changes the player
                        player = 2;
                        // sees if game is over
                        checkWin();
                    } else {
                        // same but opposite of if player === 1
                        thisSquare.classList.add(`${player2Symbol}`);
                        thisSquare.innerHTML = player2Symbol;
                        sCO[keyForSquaresClickedOnArray] = player2Symbol
                        console.log(sCO);
                        document.querySelector('#playerTurn').innerHTML = "Player X you're up";
                        player = 1;
                        checkWin();
                    }
                }
            }
        )
    }
}