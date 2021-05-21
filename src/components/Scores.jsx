import React, { useEffect } from "react";

export default function Scores({ game, setGame, board, setEndGame }) {
  useEffect(() => {
    const tempBoard = { ...game };
    tempBoard.endGame();
    setGame(tempBoard);
    // eslint-disable-next-line
  }, []);

  function handleRestart() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <div className="score-page">
      <div className="scores-box">
        <div className="scores">
          <div style={{ border: "2px solid #C40A0B", borderRadius: "1rem" }}>
            {game.totals["red"]}
          </div>
          <div style={{ border: "2px solid #E2C506", borderRadius: "1rem" }}>
            {game.totals["yellow"]}
          </div>
          <div style={{ border: "2px solid #44D30B", borderRadius: "1rem" }}>
            {game.totals["green"]}
          </div>
          <div style={{ border: "2px solid #1534CA", borderRadius: "1rem" }}>
            {game.totals["blue"]}
          </div>
          <div style={{ border: "2px solid black", borderRadius: "1rem" }}>
            {game.totals["penalties"]}
          </div>
          <p>Total: {game.totals["total"]}</p>
        </div>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
