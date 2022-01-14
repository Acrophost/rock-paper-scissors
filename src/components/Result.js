import { useState, useEffect } from 'react';
import Option from './Option';
import { calculateResult, getRandomSign } from '../util/gameUtils';

const Result = ({ setClicked, clicked, setScore, score }) => {
    const [enemy, setEnemy] = useState('empty');

    useEffect(() => {
        setTimeout(() => {
            const enemyMove = getRandomSign();
            setEnemy(enemyMove);
            setScore(score + calculateResult(clicked, enemyMove));
            localStorage.setItem('score', score);
        }, 1500);
    }, [setEnemy, setScore, clicked, score]);

    return (
        <>
            <div className="player-choice">
                <h2>YOU PICKED</h2>
                <Option variation={clicked} setClicked={setClicked} disabled={'disabled'} result="result-1" />
            </div>
            {  }
            <div className="enemy-choice">
                <h2>THE HOUSE PICKED</h2>
                <Option variation={enemy} setClicked={setClicked} disabled={'disabled'} result="result-2" />
            </div>
        </>
    )
};

export default Result;