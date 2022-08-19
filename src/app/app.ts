import { GlobalConfig } from "./../config/index";
import express, { Application, urlencoded, json } from "express";
import router from "../routes";
import DatabaseConnection from "../services/database";

const App: Application = express();
App.use(json());
App.use(urlencoded({ extended: true }));
App.set("PORT", GlobalConfig.app.PORT);

App.use("/v1",router)

export default App;
