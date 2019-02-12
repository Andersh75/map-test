const express = require(`express`)
const swaggerJSDoc = require(`swagger-jsdoc`)
const api = require(`./routes/index`)
const app = express()
const port = 4000
var bodyParser = require(`body-parser`)

// swagger definition
const swaggerDefinition = {
  info: {
    title: `Node Swagger API`,
    version: `1.0.0`,
    description: `Demonstrating how to describe a RESTful API with Swagger`,
  },
  host: `localhost:4000`,
  basePath: `/`,
}
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [`./**/routes/*.js`, `routes.js`], // pass all in array
}
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options)

app.use(express.static(`public`))
app.use(bodyParser.json())

app.get(`/`, (req, res) => res.send(`Hello World!`))

app.use(`/api`, api)

// serve swagger
app.get(`/swagger.json`, function(req, res) {
  res.setHeader(`Content-Type`, `application/json`)
  res.send(swaggerSpec)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
