import express from "express"
const router = express.Router()
import {
  createDemo
} from "../models/demo"

let demoPaths = {}

router.postDemo = (req, res) => {
  return {
    greeting: "hello"
  }
  // createDemo(req.body)
}

export default demoPaths