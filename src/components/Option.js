import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';

const Option = ({ disabled, variation, setClicked, result }) => {
    let icon;

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
        <button className={`option ${variation} ${result !== '' ? result : ''}`} onClick={handleClick} disabled={disabled}>
            <div className="option__ring">
                {icon && <img src={icon} alt={variation} className="option__icon" />}
            </div>
        </button>
    );
};

export default Option;