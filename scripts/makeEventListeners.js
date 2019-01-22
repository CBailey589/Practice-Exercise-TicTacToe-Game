const makeEventListeners = () => {
    // makes an event listener for Player vs Player
    if (gameType === "PvP") {
        for (square of gameSquares) {
            square.addEventListener(
                "click", playerVsPlayer)
        }
    // Makes an event listener for Player vs Computer
    } else if (gameType === "PvC") {
        for (square of gameSquares) {
            square.addEventListener(
                "click", playerVsComputer)
        }
    }  
}