const checkWin = () => {
    if (sCO["00"] === sCO["10"] && sCO["00"] === sCO["20"] && (sCO["00"] === "X" || sCO["00"] === "O")) {
        alert(`Player ${sCO["00"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["00"]} has won the game!`;
        resetGame();
    }
    else if (sCO["01"] === sCO["11"] && sCO["01"] === sCO["21"] && (sCO["01"] === "X" || sCO["01"] === "O")) {
        alert(`Player ${sCO["01"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["01"]} has won the game!`;
        resetGame();
    }
    else if (sCO["02"] === sCO["12"] && sCO["02"] === sCO["22"] && (sCO["02"] === "X" || sCO["02"] === "O")) {
        alert(`Player ${sCO["02"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["02"]} has won the game!`;
        resetGame();
    }
    else if (sCO["00"] === sCO["01"] && sCO["00"] === sCO["02"] && (sCO["00"] === "X" || sCO["00"] === "O")) {
        alert(`Player ${sCO["00"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["00"]} has won the game!`;
        resetGame();
    }
    else if (sCO["10"] === sCO["11"] && sCO["10"] === sCO["12"] && (sCO["10"] === "X" || sCO["10"] === "O")) {
        alert(`Player ${sCO["10"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["10"]} has won the game!`;
        resetGame();
    }
    else if (sCO["20"] === sCO["21"] && sCO["20"] === sCO["22"] && (sCO["20"] === "X" || sCO["20"] === "O")) {
        alert(`Player ${sCO["20"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["20"]} has won the game!`;
        resetGame();
    }
    else if (sCO["00"] === sCO["11"] && sCO["00"] === sCO["22"] && (sCO["00"] === "X" || sCO["00"] === "O")) {
        alert(`Player ${sCO["00"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["00"]} has won the game!`;
        resetGame();
    }
    else if (sCO["20"] === sCO["11"] && sCO["20"] === sCO["02"] && (sCO["20"] === "X" || sCO["20"] === "O")) {
        alert(`Player ${sCO["20"]} has won the game!`);
        document.querySelector('#playerTurn').innerHTML = `Player ${sCO["20"]} has won the game!`;
        resetGame();
    }
    else if(Object.values(sCO).length === 9) {
        alert("Nobody wins. Play Again?")
        resetGame();
    }
}