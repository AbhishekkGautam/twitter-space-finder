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

  return (
    <div>
      <h1 style={{ color: "dodgerblue" }}>{spaces.title}</h1>
      <h2>
        {spaces.state === "live"
          ? "Ongoing"
          : `Starting on: ${scheduledDate} @ ${scheduledTime}`}
      </h2>
      <p style={{ color: "orange" }}>{spaces.state}</p>
      {user &&
        user.map((user, index) => {
          return (
            <div key={index}>
              <h3>
                {spaces.creator_id === user.id
                  ? `Created by: ${user.name}`
                  : ""}
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default SpaceCard;
