const request = require("request");
const PouchDB = require("pouchdb");
const database = new PouchDB("http://plex:1111111111@127.0.0.1:5984/test1");

const getPosts = (req, res) => {
  request("http://localhost:3000/posts", function(error, response, body) {
    res.send(body);
  });
};

const postPosts = (req, res) => {
  request.post({ url: "http://localhost:3000/posts", form: req.body }, function(
    error,
    response,
    body
  ) {
    res.send(body);
  });
};

module.exports = {
  getPosts,
  postPosts
};
