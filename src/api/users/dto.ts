import { createUserI } from "./interface";

export  function createUserMapper(resource:any){
    return {
        name:resource.name,
        lastName:resource.lastName,
        email:resource.email,
        password:resource.password
    }
}

export  function findUserByEmailMapper(resource:any):{email:string}{
    return {
        email:resource.email,
    }
}