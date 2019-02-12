const request = require(`request`)
const PouchDB = require(`pouchdb`)
const database = new PouchDB(`http://plex:1111111111@127.0.0.1:5984/test1`)

const getIpaddresses = (req, res) => {
  request(`http://localhost:3000/ipaddresses`, function(error, response, body) {
    res.send(body)
  })
}

module.exports = {
  getIpaddresses,
}
