import { createUserDtoI } from './interface/index';
import { Validator } from './../../utils/validator';
import  createUserDto  from './dto/create/createUser.dto';
import { User } from "../../database/models/user"
import { validateOrReject } from 'class-validator';
export class UserService{
    private model=User
    async getUserByPk(pk:string){
        try {
            return await this.model.findByPk(pk) 
        } catch (error) {
            console.log(error);
        }
    }
    async createUser(body: createUserDtoI){
        
    }

}