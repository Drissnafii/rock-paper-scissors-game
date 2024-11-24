function playRound(myMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (myMove === computerMove) {
        result = 'Tie.';
    } else if (myMove === 'rock' && computerMove === 'paper') {
        result = 'You lose.';
    } else if (myMove === 'rock' && computerMove === 'scissors') {
        result = 'You win.';
    }

    alert(`You picked ${myMove}. Computer picked ${computerMove}. Result: ${result}`);
}