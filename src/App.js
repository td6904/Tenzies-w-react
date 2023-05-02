import React from "react";
import Die from "./Die";



export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
    newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main>
        <div className="game-ui">
          <div className="boxes">
            {diceElements}
          </div>
      </div>
    </main>
  );
}

