import React from "react";
import SpaceCard from "./SpaceCard";

const SpacesList = ({ spaceData, userData }) => {
  return (
    <div>
      <h1>Spaces</h1>
      {spaceData &&
        spaceData.map((spaces, id) => {
          return (
            <div className="" key={id}>
              <SpaceCard spaces={spaces} user={userData.users} />
            </div>
          );
        })}
    </div>
  );
};

export default SpacesList;
