const clearEventListeners = () => {
    // if gameType is PvC, it indicates a move from PvP to PvC so playerVsPlayer has to be removed. Eventlisteners have to be removed to prevent the "click a different square" alert from firing, and from the event listener being assigned multiple times (causing multiple callings of the function)
    if (gameType === "PvC") {
        for (square of gameSquares) {
            square.removeEventListener(
                "click", playerVsPlayer)
        }
        // opposite of above 
    } else if (gameType === "PvP") {
        for (square of gameSquares) {
            square.removeEventListener(
                "click", playerVsComputer)
        }
    }
}