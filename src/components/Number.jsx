import React, { useEffect, useRef } from "react";

export default function Number({
  number,
  color,
  board,
  setGame,
  disabled,
  toggled,
  game,
  hex,
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (toggled) buttonRef.current.classList.add("toggled");
    if (!toggled) buttonRef.current.classList.remove("toggled");

    if (disabled) buttonRef.current.classList.add("disabled");
    if (!disabled) buttonRef.current.classList.remove("disabled");
  }, [toggled, disabled]);

  const handleClick = () => {
    const tempBoard = { ...game };
    tempBoard.selectNumber(color, number);
    setGame(tempBoard);
  };

  return (
    <button
      disabled={disabled}
      ref={buttonRef}
      onClick={handleClick}
      className="number"
    >
      {number === 0 && (
        <i
          style={{ color: toggled ? "white" : hex }}
          class={toggled || disabled ? "fas fa-lock" : "fas fa-lock-open"}
        ></i>
      )}
      {number !== 0 && <p style={{ color: hex }}>{number}</p>}
    </button>
  );
}
