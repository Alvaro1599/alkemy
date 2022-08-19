import express from "express"
import authController from "../api/Auth/controller"
import authRouter from "../api/Auth/router"
import characterRouter from "../api/characters/routes"
import userRouter from "../api/users/routes"

const router=express.Router()  

router.use("/auth",authRouter)
router.use("/character",characterRouter)


export default router