import React, { useState } from "react";

export default function Penalty({ game, setGame }) {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    const tempBoard = { ...game };

    if (toggled) {
      tempBoard.removePenalty();
      setGame(tempBoard);
      setToggled(false);
    } else {
      tempBoard.addPenalty();
      setGame(tempBoard);
      setToggled(true);
    }
  };
  return (
    <button onClick={handleClick} className="penalty-button">
      {toggled ? "X" : ""}
    </button>
  );
}
