import { useState } from 'react';
import Board from './Board';
import Result from './Result';


const Game = ({ score, setScore }) => {
    const [clicked, setClicked] = useState('');

    return (
        <main className="game">
            {clicked === '' ?
            <Board setClicked={setClicked} /> : <Result setClicked={setClicked} clicked={clicked} setScore={setScore} score={score} />}
        </main>
    );
}

export default Game;