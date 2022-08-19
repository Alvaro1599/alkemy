import { GlobalConfig } from "../../config/index";
import { SequelizeConnection } from "./modules/Sequelize";
import { GlobalConfigI } from "../../config/interface";

export default async function DatabaseConnection(db: GlobalConfigI) {
  try {
    await SequelizeConnection(db)
    console.log("📦 Database is running");
    return 
  } catch (error) {
    console.log(error);
    
  }

}
