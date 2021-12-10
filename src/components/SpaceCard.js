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
    <div className="bg-primaryGray rounded-xl">
      <div className="px-6 py-5">
        <a
          href={`https://twitter.com/i/spaces/${spaces.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-base font-semibold">{spaces.title}</h1>
          <div className="text-xs font-normal pt-3">
            {spaces.state === "live" ? (
              <h2 className="text-primaryGreen-600">{`LIVE NOW - ${spaces.participant_count} Participants`}</h2>
            ) : (
              `Scheduled on: ${scheduledDate} @ ${scheduledTime}`
            )}
          </div>
        </a>
      </div>
      <div className="bg-secondaryGray rounded-lg">
        {user &&
          user.map((user, index) => {
            return spaces.creator_id === user.id ? (
              <div
                key={index}
                className="px-6 py-5 flex items-center justify-between"
              >
                <div className="">
                  <a
                    href={`https://twitter.com/${user.username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.profile_image_url}
                      alt="user profile"
                    />
                  </a>
                </div>
                <div className="">
                  {spaces.state === "scheduled" ? (
                    <div className="text-sm text-gray-100">Upcoming</div>
                  ) : (
                    <button className="px-4 py-2 text-gray-100 text-sm rounded outline-none bg-primaryGray">
                      <a
                        href={`https://twitter.com/i/spaces/${spaces.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Join Space
                      </a>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              ""
            );
          })}
      </div>
    </div>
  );
};

export default SpaceCard;
