import React, { useState } from "react";

export default function EndGame({ game, setGame, setEndGame }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  function handleEnd() {
    setEndGame(true);
    setToggle(false);
  }

  return (
    <>
      {toggle && (
        <div className="confirm">
          <div className="confirm-box">
            <h1>Are you sure?</h1>
            <div className="confirm-buttons">
              <button
                onClick={handleToggle}
                style={{
                  color: "gray",
                  border: "none",
                  background: "none",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleEnd}
                style={{
                  background: "red",
                  color: "white",
                  border: "1px solid red",
                }}
              >
                End Game
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={handleToggle} className="endgame-button">
        End Game
      </button>
    </>
  );
}
