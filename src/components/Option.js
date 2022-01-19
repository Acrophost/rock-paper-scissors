import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';

const Option = ({ disabled, variation, setClicked, result, winner }) => {
    let icon;

    const isWinner = winner !== '' && ((winner === 'player' && result === 'result-1') || (winner === 'enemy' && result === 'result-2'));
    const optionClass = `option ${variation} ${result !== '' ? result : ''}${isWinner ? ' winner' : ''}`;

    const handleClick = () => {
        setClicked(variation);
        console.log(variation);
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
    
        default:
            break;
    }

    return (
        <button className={optionClass} onClick={handleClick} disabled={disabled}>
            <div className="option__ring">
                {icon && <img src={icon} alt={variation} className="option__icon" />}
            </div>
        </button>
    );
};

export default Option;