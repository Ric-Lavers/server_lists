require("dotenv").config()
import "babel-polyfill"
import express from "express"
import bodyParser from "body-parser"

import demoPaths from "./data/routes/demoPaths"
import skibblPaths from "./data/routes/skribbl.routes"

const cors = require("cors")
const app = express()

app.use(cors('*'))
app.use(bodyParser.json({
  type: "*/*"
}))
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.get("/", (req, res) => {
  return res.status(200).json("HOME")
})

app.post("/demo", (req, res) => demoPaths.postDemo(req, res))
app.use("/skibbl", skibblPaths)

app.listen(8080, () => console.log("Running server on port localhost:8080"))
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})