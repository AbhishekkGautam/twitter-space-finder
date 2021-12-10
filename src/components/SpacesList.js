import React from "react";
import SpaceCard from "./SpaceCard";
import { motion } from "framer-motion";

const SpacesList = ({ spaceData, userData }) => {
  return (
    <motion.div
      animate={{ y: -50 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-5 md:px-8"
    >
      {spaceData &&
        spaceData.map((spaces, id) => {
          return (
            <div key={id}>
              <SpaceCard spaces={spaces} user={userData.users} />
            </div>
          );
        })}
    </motion.div>
  );
};

export default SpacesList;
