
import './App.css';
import Dice from './Dice.js';
import React from 'react';

function App() {

  const [dice, setDice] = React.useState([
    { id: 1, value: 1, lock: false },
    { id: 2, value: 2, lock: false },
    { id: 3, value: 3, lock: false },
    { id: 4, value: 4, lock: false },
    { id: 5, value: 5, lock: false },
    { id: 6, value: 2, lock: false },
    { id: 7, value: 2, lock: false },
    { id: 8, value: 4, lock: false },
    { id: 9, value: 5, lock: false },
    { id: 10, value: 6, lock: false }
  ]);

  const [isGameOver, setIsGameOver] = React.useState(false);

  const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  const rollDice = () => {
    const updatedDice = dice.map(die => ({...die, value: die.lock? die.value : randomNumber()}))
    setDice(updatedDice);
  }
  
  const toggleLock = (id) => {
    const updatedDice = dice.map(die => {
      if (die.id === id) {
        
        return { ...die, lock: !die.lock };
      }
      return die;
    });
    setDice(updatedDice);
    checkWin(updatedDice);
  }

  function checkWin  (dice) {
    const allLocked = dice.every(die => die.lock);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);

    if (allLocked && allSameValue) {
      setIsGameOver(true);
      alert("You won!");
    }
  }
  // This function is called when the button is clicked. It logs "clicked" to the console.

  return (
    <div className="App">
      <h1>TENZIES</h1>
      <p>Roll until all dice are the same. Click each die to freeze at its current value between rolls.</p>
      <div className="dice-container">
        {dice.map(die => (
          <Dice key={die.id} value={die.value} id={die.id} lock={die.lock} onClick={() => toggleLock(die.id)}/>
        ))}
      </div>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;
