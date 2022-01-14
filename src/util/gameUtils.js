export function getRandomSign() {
    const signs = ['rock', 'paper', 'scissors'];

    return signs[Math.floor(Math.random() * signs.length)];
}

export function calculateResult(player, enemy) {
    if((player === 'rock' && enemy === 'paper') 
        || (player === 'paper' && enemy === 'scissors')
        || (player === 'scissors' && enemy === 'rock')) {
        return -1;
    }

    if((player === 'rock' && enemy === 'scissors') 
    || (player === 'paper' && enemy === 'rock')
    || (player === 'scissors' && enemy === 'paper')) {
        return 1;
    }

    return 0;
}