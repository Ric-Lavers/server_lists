import express from "express"
import controller from "../controllers/skribbl.controller"

const router = express.Router()

router.post("/custom-words", controller.postWord)
router.get("/custom-words", controller.getWords)
router.get("/group-words", controller.getWordsByGroup)
router.post("/add-group", controller.postGroup)
router.get("/groups", controller.getGroups)

export default router