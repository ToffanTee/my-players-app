// PlayersList.js
import React from "react";
import Player from "./Player";
import { players } from "./Players";

const PlayersList = () => {
  return (
    <div className="container">
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
