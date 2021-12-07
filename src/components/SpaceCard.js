import React from "react";

const SpaceCard = ({ spaces, user }) => {
  const date = new Date(spaces.scheduled_start);
  const scheduledDate = date.toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  const scheduledTime = date.toLocaleString("default", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  console.log(`${scheduledTime},${scheduledDate}`);

  return (
    <div>
      <h1 style={{ color: "dodgerblue" }}>{spaces.title}</h1>
      <h2>
        {spaces.state === "live"
          ? "Ongoing"
          : `Starting on: ${spaces.scheduled_start}`}
      </h2>
      <p style={{ color: "orange" }}>{spaces.state}</p>
      {user &&
        user.map((user, id) => {
          return (
            <div key={id}>
              <h3>Created by: {user.name}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default SpaceCard;
