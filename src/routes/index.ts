import express from "express"
import authRouter from "../api/Auth/router"
import characterRouter from "../api/characters/routes"
import movieRouter from "../api/movies/routes"

const router=express.Router()  

router.use("/auth",authRouter)
router.use("/characters",characterRouter)
router.use("/movies",movieRouter)



export default router