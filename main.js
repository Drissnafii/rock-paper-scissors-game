function playRound(myMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    switch (true) {
        case (myMove === computerMove):
            result = 'Tie.';
            break;
        case (myMove === 'rock' && computerMove === 'paper'):
        case (myMove === 'scissors' && computerMove === 'rock'):
            result = 'You lose.';
            break;
        case (myMove === 'rock' && computerMove === 'scissors'):
        case (myMove === 'paper' && computerMove === 'rock'):
        case (myMove === 'scissors' && computerMove === 'paper'):
            result = 'You win.';
            break;
        default:
            result = 'Invalid move.';
    }
    

    alert(`You picked ${myMove}. Computer picked ${computerMove}. Result: ${result}`);
}