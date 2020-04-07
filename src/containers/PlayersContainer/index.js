import React from "react";
import PlayerList from "./PlayerList";

const PlayersContainer = () => {
  return (
    <div className="playersContainer">
      <h1 className="playersHeader">Players:</h1>
      <PlayerList />
    </div>
  );
};

export default PlayersContainer;
