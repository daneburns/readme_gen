const axios = require('axios')

const api = {
    getUser(username) {
        return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    }
  };
  
  module.exports = api;
  