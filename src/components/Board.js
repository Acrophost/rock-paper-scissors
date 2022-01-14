import Web from '../images/bg-triangle.svg';
import Option from './Option';

const Board = ({ setClicked }) => {
    return (
        <>
            <img src={Web} alt="web" className="background-web" />
            <Option variation="paper" setClicked={setClicked} disabled={''} result="" />
            <Option variation="scissors" setClicked={setClicked} disabled={''} result="" />
            <Option variation="rock" setClicked={setClicked} disabled={''} result="" />
        </>
    )
};

export default Board;