const request = require("request");
const PouchDB = require("pouchdb");
const database = new PouchDB("http://plex:1111111111@127.0.0.1:5984/test1");

const getNames = (req, res) => {
  database.allDocs({ include_docs: true }).then(result => {
    let names = result.rows.map(row => {
      return { name: row.doc.name };
    });
    res.send(names);
  });
};

const postNames = (req, res) => {
  database
    .post(req.body)
    .then(function(response) {
      database.get(response.id).then(result => {
        res.send(result);
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = {
  getNames,
  postNames
};
