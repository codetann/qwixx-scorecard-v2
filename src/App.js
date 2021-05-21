import React, { useState } from "react";
import { useAppContext } from "./context/Provider";
import "./styles/app.css";
// Components
import Row from "./components/Row";
import Penalty from "./components/Penalty";
import EndGame from "./components/EndGame";
import Scores from "./components/Scores";

function App() {
  const { game, setGame, board } = useAppContext();
  const [endGame, setEndGame] = useState(false);

  return (
    <div className="board">
      {/* Row Section */}
      <div className="rows">
        {game.rows.map((row) => (
          <Row
            key={row.color}
            game={game}
            numbers={row.numbers}
            color={row.color}
            unlocked={row.unlocked}
            board={board}
            setGame={setGame}
            hex={row.hex}
          />
        ))}
      </div>
      {/* Penalty Section */}
      <div className="bottom-row">
        <div className="penalties">
          <h3>Penalties</h3>
          <Penalty game={game} setGame={setGame} />
          <Penalty game={game} setGame={setGame} />
          <Penalty game={game} setGame={setGame} />
          <Penalty game={game} setGame={setGame} />
        </div>
        <EndGame game={game} setGame={setGame} setEndGame={setEndGame} />
      </div>
      {endGame && (
        <Scores
          game={game}
          setGame={setGame}
          board={board}
          setEndGame={setEndGame}
        />
      )}
    </div>
  );
}

export default App;
