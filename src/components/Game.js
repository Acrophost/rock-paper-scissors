import { useState } from 'react';
import Board from './Board';
import Result from './Result';


const Game = ({ score, setScore, bonus }) => {
    const [clicked, setClicked] = useState('');

    return (
        <main className={`game ${bonus ? 'bonus' : ''}`}>
            {clicked === '' ?
            <Board setClicked={setClicked} bonus={bonus} /> : <Result setClicked={setClicked} clicked={clicked} setScore={setScore} score={score} bonus={bonus} />}
        </main>
    );
}

export default Game;