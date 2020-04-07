import React, { useContext } from "react";
import { PlayerContext } from "../../index";
import PlayerRow from "./PlayerRow";
import "./styles.css";

const PlayerList = () => {
  const { playerData, favoritePlayers, setFavoritePlayers } = useContext(
    PlayerContext
  );

  // add player to favorite players array if not already added;
  const addPlayer = (player) => {
    if (favoritePlayers.find((y) => y.pid === player.pid)) return;
    setFavoritePlayers([...favoritePlayers, player]);
  };

  // format (and sort) data into easily mappable table format to fix main stats and add button;
  const reduceIntoTable = playerData
    .map((curr) => {
      return {
        ...curr,
        addToFavorites: (
          <button className="addToFavorites" onClick={() => addPlayer(curr)}>
            Add To Favorites
          </button>
        ),
        pts: curr.pts.toFixed(1),
        reb: curr.reb.toFixed(1),
        ast: curr.reb.toFixed(1),
      };
    })
    .sort((a, b) => (a.pts < b.pts ? 1 : -1));

  return (
    <div className="tableContainer">
      <table cellSpacing="0">
        <thead>
          <tr className="headerRow">
            <th></th>
            <th>Name</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
          </tr>
        </thead>
        <tbody>
          {reduceIntoTable.map((row) => (
            <PlayerRow key={row.pid} playerData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
