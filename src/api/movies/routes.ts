import express from "express"
import movieController from "./controller"
import userController from "./controller"

const movieRouter = express.Router()

movieRouter.post("/",movieController.createMovie)
movieRouter.patch("/",movieController.updateMovie)
movieRouter.delete("/",movieController.deleteMovie)
movieRouter.get("/",movieController.getMovie)
movieRouter.get("/detail",movieController.findMovieById)
movieRouter.get("/search/",movieController.findMovieByQuery)



export default movieRouter