const fetch = require("node-fetch");

exports.handler = async function (event) {
  let queryString = event.queryStringParameters;

  const TWITTER_API = `https://api.twitter.com/2/spaces/search?query=${queryString.query}&expansions=creator_id&user.fields=created_at&space.fields=id,title,created_at,creator_id,participant_count,scheduled_start`;

  const response = await fetch(TWITTER_API, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
