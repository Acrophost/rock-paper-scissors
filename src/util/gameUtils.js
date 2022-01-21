export function getRandomSign(bonus) {
    let signs = ['rock', 'paper', 'scissors'];

    if(bonus) {
        signs = [...signs, 'lizard', 'spock'];
    }

    return signs[Math.floor(Math.random() * signs.length)];
}

export function calculateResult(player, enemy) {
    if((player === 'rock' && enemy === 'paper') 
        || (player === 'rock' && enemy === 'spock')
        || (player === 'paper' && enemy === 'scissors')
        || (player === 'paper' && enemy === 'lizard')
        || (player === 'scissors' && enemy === 'rock')
        || (player === 'scissors' && enemy === 'spock')
        || (player === 'lizard' && enemy === 'rock')
        || (player === 'lizard' && enemy === 'scissors')
        || (player === 'spock' && enemy === 'lizard')
        || (player === 'spock' && enemy === 'paper')) {
        return -1;
    }

    if((player === 'rock' && enemy === 'scissors') 
        || (player === 'rock' && enemy === 'lizard')
        || (player === 'paper' && enemy === 'rock')
        || (player === 'paper' && enemy === 'spock')
        || (player === 'scissors' && enemy === 'lizard')
        || (player === 'scissors' && enemy === 'paper')
        || (player === 'lizard' && enemy === 'spock')
        || (player === 'lizard' && enemy === 'paper')
        || (player === 'spock' && enemy === 'rock')
        || (player === 'spock' && enemy === 'scissors')) {
        return 1;
    }

    return 0;
}