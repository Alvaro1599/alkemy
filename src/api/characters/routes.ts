import express from "express"
import characterController from "./controller"
import userController from "./controller"

const characterRouter = express.Router()

characterRouter.post("/",characterController.createCharacter)
characterRouter.patch("/",characterController.updateCharacter)
characterRouter.delete("/",characterController.deleteCharacter)
characterRouter.get("/",characterController.getCharacters)
characterRouter.get("/detail",characterController.findCharacterById)
characterRouter.get("/search/",characterController.findCharacterByQuery)



export default characterRouter