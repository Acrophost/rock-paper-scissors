import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Lizard from '../images/icon-lizard.svg';
import Spock from '../images/icon-spock.svg';

const Option = ({ disabled, variation, setClicked, result, winner, bonus }) => {
    let icon;

    const isWinner = winner !== '' && ((winner === 'player' && result === 'result-1') || (winner === 'enemy' && result === 'result-2'));
    const optionClass = `option ${variation} ${result !== '' ? result : ''} ${bonus ? 'bonus' : ''}`;

    const handleClick = () => {
        setClicked(variation);
    };

    switch (variation) {
        case 'rock':
            icon = Rock;
            break;

        case 'paper':
            icon = Paper;
            break;

        case 'scissors':
            icon = Scissors;
            break;

        case 'lizard':
            icon = Lizard;
            break;

        case 'spock':
            icon = Spock;
            break;
    
        default:
            break;
    }

    return (
        <div className={isWinner ? ' winner' : ''}>
            <button className={optionClass} onClick={handleClick} disabled={disabled}>
                <div className="option__ring">
                    {icon && <img src={icon} alt={variation} className="option__icon" />}
                </div>
            </button>
        </div>
    );
};

export default Option;