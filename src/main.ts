import "dotenv/config";
import { GlobalConfig } from "./config/index";
import { SequelizeDatabase } from "./database/instance/Sequelize";
import { DatabaseBlock } from "./database/index";
import { App } from "./app/app";
import { InitServer } from "./app/server";

(async () => {
  try {
    const server = new InitServer(new App({ port: 3000 }));
    server.initServer();
    const database = new DatabaseBlock({
      ConfigGlobal: GlobalConfig,
      currentDatabase: new SequelizeDatabase(),
    });
    await database.initDatabase();
  } catch (error) {
    console.log(error);
  }
})();
