import React, { createContext, useContext, useState } from "react";
import { board } from "./data";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function Provider({ children }) {
  const [game, setGame] = useState(board);

  const value = {
    game,
    setGame,
    board,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
