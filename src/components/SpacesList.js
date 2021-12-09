import React from "react";
import SpaceCard from "./SpaceCard";

const SpacesList = ({ spaceData, userData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-5 md:px-8">
      {spaceData &&
        spaceData.map((spaces, id) => {
          return (
            <div key={id}>
              <SpaceCard spaces={spaces} user={userData.users} />
            </div>
          );
        })}
    </div>
  );
};

export default SpacesList;
