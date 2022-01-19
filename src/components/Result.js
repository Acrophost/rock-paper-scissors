import { useState, useEffect } from 'react';
import Option from './Option';
import Message from './Message';
import { calculateResult, getRandomSign } from '../util/gameUtils';

const Result = ({ setClicked, clicked, setScore, score }) => {
    const [enemy, setEnemy] = useState('empty');
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const enemyMove = getRandomSign();
            setEnemy(enemyMove);
            const result = calculateResult(clicked, enemyMove);
            setScore(score + result);
            localStorage.setItem('score', score);
            setTimeout(() => {
                setShow(true);
                setWinner(result > 0 ? 'player' : result !== 0 ? 'enemy' : '');
            }, 1000);
        }, 1500);
        // eslint-disable-next-line
    }, [clicked]);

    return (
        <>
            <div className="player-choice">
                <h2>YOU PICKED</h2>
                <Option variation={clicked} setClicked={setClicked} disabled={'disabled'} result="result-1" winner={winner} />
            </div>
            <div className='mid-gap'>
                {show && <Message gameResult={calculateResult(clicked, enemy)} setClicked={setClicked} />}
            </div>
            <div className="enemy-choice">
                <h2>THE HOUSE PICKED</h2>
                <Option variation={enemy} setClicked={setClicked} disabled={'disabled'} result="result-2" winner={winner} />
            </div>
        </>
    )
};

export default Result;