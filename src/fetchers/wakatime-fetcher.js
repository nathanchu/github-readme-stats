const axios = require("axios");

const fetchLast7Days = async ({ username, api_domain }) => {
  try {
    const { data } = await axios.get(
      `https://${
        api_domain && api_domain.replace(/[^a-z-.0-9]/gi, "") || "wakatime.com"
      }/api/v1/users/${username}/stats/last_7_days?is_including_today=true`,
    );

    return data.data;
  } catch (err) {
    if (err.response.status < 200 || err.response.status > 299) {
      throw new Error(
        "Wakatime user not found, make sure you have a wakatime profile",
      );
    }
    throw err;
  }
};

module.exports = {
  fetchLast7Days,
};
