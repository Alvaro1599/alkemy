import express from "express"
import authController from "../api/Auth/controller"
import userRouter from "../api/users/routes"

const router=express.Router()  

router.use("/auth/register",authController.register)

export default router