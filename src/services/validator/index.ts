import { ValidationError } from "sequelize/types";
import sequelizeValidator from "./sequelize";
export default function validator(err: any) {
        console.log(err);
  return sequelizeValidator(err);
}
