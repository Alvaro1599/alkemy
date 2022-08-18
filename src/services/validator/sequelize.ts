import { ValidationError } from 'sequelize/types';
import {response} from "express"
export default function sequelizeValidator(err: ValidationError){
   
   return {name:"sequelize Validation",errors:err.errors.map(errorItem=>{
      return {field:errorItem.path,messag:errorItem.message}
   })}}