import { createUserI } from "./interface";
import Crypto from "../../services/crypto"
export  function createUserMapper(resource:any){
    return {
        name:resource.name,
        lastName:resource.lastName,
        email:resource.email,
        password:Crypto.encrypt(resource.password) 
    }
}

export  function findUserByEmailMapper(resource:any):{email:string}{
    return {
        email:resource.email,
    }
}