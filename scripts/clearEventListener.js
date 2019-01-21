const clearEventListeners = () => {
    for (square of gameSquares) {
        square.removeEventListener("click");
    }
}