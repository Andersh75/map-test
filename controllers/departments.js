const request = require("request");
const PouchDB = require("pouchdb");
const database = new PouchDB("http://plex:1111111111@127.0.0.1:5984/test1");

const getDepartments = (req, res) => {
  request("https://www.kth.se/api/kopps/v2/departments.sv.json", function(
    error,
    response,
    body
  ) {
    res.send(body);
  });
};

module.exports = {
  getDepartments
};
