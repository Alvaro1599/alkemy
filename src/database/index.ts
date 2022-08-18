import { DatabaseBlockConstructorI } from "./interface/index";
import { GlobalConfigI } from "./../config/interface/index";
import { CurrentDatabase } from "./instance/base/base";
export class DatabaseBlock {
  ConfigGlobal: GlobalConfigI;
  Database: CurrentDatabase;
  constructor({ ConfigGlobal, currentDatabase }: DatabaseBlockConstructorI) {
    this.ConfigGlobal = ConfigGlobal;
    this.Database = currentDatabase;
  }
  async initDatabase() {
    await this.Database.init(this.ConfigGlobal);
  }
}
