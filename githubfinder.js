const axios = require("axios");

function githubfinder(username) {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(res => {
      return res.data;
    })
    .catch(err => "error");
}

exports.githubfinder = githubfinder;
