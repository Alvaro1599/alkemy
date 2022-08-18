import express, { Application } from "express";
import { AppConstructorI } from "../interface";

export class App {
  private express = express;
  public app: Application;
  public port: number | string;
  constructor({ port }: AppConstructorI) {
    this.app = express();
    this.port = port;
    this.config();
  }

  config() {
    this.app.set("PORT", this.port || 3000);
  }
  initRouter(){
    
  }
  getInstance() {
    return this.app;
  }
}
