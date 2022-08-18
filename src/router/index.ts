import express from "express"
export class Router{
    router:express.Router=express.Router()
    constructor(){
        this.router.use("/")    
    }

    
    


}