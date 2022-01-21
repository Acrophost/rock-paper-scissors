import Modal from './components/Modal';
import Header from './components/Header';
import Game from './components/Game';
import RulesButton from './components/RulesButton';
import './styles/App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    if(!localStorage.getItem('score')) {
      localStorage.setItem('score', 0);
    }
  }, []);

  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(+localStorage.getItem('score'));
  const [bonus, setBonus] = useState(false);

  return (
    <div className="app">
      <Header score={score} bonus={bonus} setBonus={setBonus} setScore={setScore} />
      <Game score={score} setScore={setScore} bonus={bonus} />
      <RulesButton setOpen={setOpen} />
      {open && <Modal setOpen={setOpen} bonus={bonus} />}
    </div>
  );
}

export default App;
