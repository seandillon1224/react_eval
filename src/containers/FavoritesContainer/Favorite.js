import React, { useContext } from "react";
import "./styles.css";
import { PlayerContext } from "../..";

const FavoritePlayer = ({ currPlayer }) => {
  const { setFavoritePlayers, favoritePlayers } = useContext(PlayerContext);

  const removeFromFavorites = (removedPlayerId) => {
    let filtered = favoritePlayers.filter(
      (player) => player.pid !== removedPlayerId
    );
    setFavoritePlayers(filtered);
  };

  const { img, pts, reb, ast, name, pid } = currPlayer;

  return (
    <div className="favoritePlayer">
      <div className="playerColumn">
        <img src={img} alt="favoritePlayer" />
      </div>
      <div className="infoColumn">
        <div className="playerName">{name}</div>
        <div className="mainStats">
          <div className="statsContainer">
            <div className="statsHeader">PTS</div>
            <div className="statsNum">{pts}</div>
          </div>
          <div className="statsContainer">
            <div className="statsHeader">REB</div>
            <div className="statsNum">{reb}</div>
          </div>
          <div className="statsContainer">
            <div className="statsHeader">AST</div>
            <div className="statsNum">{ast}</div>
          </div>
        </div>
        <div className="buttonContainer">
          <button
            className="removeFromFavorites"
            onClick={() => removeFromFavorites(pid)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default FavoritePlayer;
