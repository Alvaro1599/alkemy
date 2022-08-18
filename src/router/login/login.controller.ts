import {Request,Response} from "express"
export class Login{
    path="auth"
    constructor(){

    }

    authLogin(req:Request,res:Response){
        res.json({d:"asdasdasd"})
    }

}