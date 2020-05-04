require("dotenv").config()
import mongoose from "mongoose"

import { demoSchema, wordSchema, groupSchema } from "./mongoSchemas"

var MONGO_URI
if (process.env.APP_ENV === "development") {
  MONGO_URI = process.env.DEVELOPMENT_MONGO_URI
} else {
  MONGO_URI = process.env.PROD_MONGO_URI_SKRIBBL
}

//Mongo connection
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

const Demo = mongoose.model("demo", demoSchema)
const Word = mongoose.model("word", wordSchema)
const Group = mongoose.model("group", groupSchema)

export { Demo, Word, Group }
