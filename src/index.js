import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";
import { jsonUrl } from "./utils/endpoints";
import FavoriteContainer from "./containers/FavoritesContainer";
import PlayersContainer from "./containers/PlayersContainer";

// Throw Player Data state and setter in context so we can grab them throughout (potential unnecessary re-renders, useReducer would fix this with time to implement);
export const PlayerContext = React.createContext({});

const App = () => {
  //initial playerData initial state
  const [playerData, setPlayerData] = useState("");
  //loading bool on fetch
  const [loadingPlayerData, setLoadingPlayerData] = useState(true);
  //initial empty favorites array
  const [favoritePlayers, setFavoritePlayers] = useState([]);

  useEffect(() => {
    const getPlayerData = async () => {
      const initialData = await fetch(jsonUrl);
      const jsonified = await initialData.json();
      setPlayerData(jsonified);
      setLoadingPlayerData(false);
    };
    getPlayerData();
  }, []);

  return (
    <div className="container">
      {loadingPlayerData ? (
        <h1>I WOULD BE A LOADER</h1>
      ) : (
        <PlayerContext.Provider
          value={{
            playerData,
            setPlayerData,
            favoritePlayers,
            setFavoritePlayers,
          }}
        >
          <FavoriteContainer />
          <PlayersContainer />
        </PlayerContext.Provider>
      )}
    </div>
  );
};

render(<App />, document.getElementById("root"));
