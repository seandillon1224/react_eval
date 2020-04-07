import React, { useContext } from "react";
import { PlayerContext } from "../../index";
import Favorites from "./Favorites";
import "./styles.css";

const FavoritesContainer = () => {
  const { favoritePlayers } = useContext(PlayerContext);

  return (
    <div>
      <h1>Favorites:</h1>
      {!favoritePlayers.length ? <h3>No Favorites Yet</h3> : <Favorites />}
    </div>
  );
};

export default FavoritesContainer;
