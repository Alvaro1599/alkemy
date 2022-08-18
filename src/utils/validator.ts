import { createUserDtoI } from './../modules/user/interface/index';
import { ValidatorDto } from "./validator/base";
import {validateOrReject} from "class-validator"
import createUserDto from "../modules/user/dto/create/createUser.dto";
export class Validator{
    currentObj
    constructor(obj:ValidatorDto){
        
        this.currentObj=<createUserDto>obj
        console.log(Object.keys(this.currentObj));

    }
     async prueba(){
        try {
            await validateOrReject( this.currentObj)
            
        } catch (error) {
            console.log(error);
                        
        }
    }
}

const obj1=new Validator(new createUserDto({email:"",lastName:"",name:"",password:""}))

obj1.prueba()