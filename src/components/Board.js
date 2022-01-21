import Web from '../images/bg-triangle.svg';
import BonusWeb from '../images/bg-pentagon.svg';
import Option from './Option';

const Board = ({ setClicked, bonus }) => {
    return (
        <>
            <img src={bonus ? BonusWeb : Web} alt="web" className={`background-web ${bonus ? 'bonus' : ''}`} />
            <Option variation="paper" setClicked={setClicked} disabled={''} result="" bonus={bonus} />
            <Option variation="scissors" setClicked={setClicked} disabled={''} result="" bonus={bonus} />
            <Option variation="rock" setClicked={setClicked} disabled={''} result="" bonus={bonus} />
            <Option variation="lizard" setClicked={setClicked} disabled={''} result="" bonus={bonus} />
            <Option variation="spock" setClicked={setClicked} disabled={''} result="" bonus={bonus} />
        </>
    )
};

export default Board;