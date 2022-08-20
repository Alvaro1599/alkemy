import express from "express"
import authRouter from "../api/Auth/router"
import characterRouter from "../api/characters/routes"
import movieRouter from "../api/movies/routes"
import Middleware from "../middlewares/jwt"
const md=new Middleware
const router=express.Router()  

router.use("/auth",authRouter)
router.use("/characters",md.tokenVerify,characterRouter)
router.use("/movies",md.tokenVerify,movieRouter)



export default router