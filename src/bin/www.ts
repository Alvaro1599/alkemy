import "dotenv/config";
import { GlobalConfig } from './../config/index';
import App from "../app/app"
import DatabaseConnection from "../services/database";
App.listen(App.get("PORT"),()=>{
    console.log("⚡ Server on port "+ App.get("PORT"));
})
DatabaseConnection(GlobalConfig)
