import React, { useContext } from "react";
import { PlayerContext } from "../../index";
import Favorite from "./Favorite";

const Favorites = () => {
  const { favoritePlayers } = useContext(PlayerContext);

  return (
    <div className="favoritesContainer">
      {favoritePlayers.map((currPlayer) => (
        <Favorite key={currPlayer.pid} currPlayer={currPlayer} />
      ))}
    </div>
  );
};

export default Favorites;
