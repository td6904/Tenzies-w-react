import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  const diceElements = dice.map((die) => (
    <Die isHeld={die.isHeld} 
    key={die.id} 
    value={die.value}
    id={die.id}
    holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="game-ui">
        {/* Roll until all dice are the same. Click each die to freeze it at its current value between rolls. */}
        <div className="boxes">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}
