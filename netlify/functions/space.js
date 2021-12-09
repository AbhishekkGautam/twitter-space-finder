const fetch = require("node-fetch");
const process = require("process");

// const axios = require("axios");
// const qs = require("qs");

exports.handler = async function (event) {
  let queryString = event.queryStringParameters;

  const { REACT_APP_TOKEN } = process.env;

  const TWITTER_API = `https://api.twitter.com/2/spaces/search?query=${queryString.query}&expansions=creator_id&user.fields=created_at,profile_image_url&space.fields=id,title,created_at,creator_id,participant_count,scheduled_start`;

  const response = await fetch(TWITTER_API, {
    headers: {
      Authorization: `Bearer ${REACT_APP_TOKEN}`,
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
