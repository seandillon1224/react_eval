import React from "react";

const PlayerRow = ({ playerData }) => {
  const { pid, addToFavorites, name, pts, reb, ast } = playerData;
  return (
    <tr className="tableRow" key={pid}>
      <td>{addToFavorites}</td>
      <td>{name}</td>
      <td>{pts}</td>
      <td>{reb}</td>
      <td>{ast}</td>
    </tr>
  );
};

export default PlayerRow;
