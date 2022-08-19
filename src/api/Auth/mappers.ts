import { User } from './../users/model';
export interface loginReponseJwtI{
    name:string
    lastname:string
    email:string
}
export const loginResponseJwt=(data:User):loginReponseJwtI=>{
    return {
        name:data.name,
        lastname:data.lastName,
        email:data.email,
        
    }
}