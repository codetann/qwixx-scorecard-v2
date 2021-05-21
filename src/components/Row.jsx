import React from "react";
import Number from "./Number";

export default function Row({
  numbers,
  color,
  unlocked,
  board,
  setGame,
  game,
  hex,
}) {
  return (
    <div className="row" style={{ background: hex }}>
      {numbers.map((num) => (
        <Number
          key={num.number}
          color={color}
          number={num.number}
          toggled={num.toggled}
          disabled={num.disabled}
          board={board}
          setGame={setGame}
          game={game}
          hex={hex}
        />
      ))}
    </div>
  );
}
