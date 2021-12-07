const fetch = require("node-fetch");

exports.handler = async function () {
  const TWITTER_API = "https://api.twitter.com/2/spaces/search?query=chill";

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
