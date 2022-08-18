import { Application } from "express";
import { App } from "./app";
export class InitServer {
  app: App;
  aplication: Application;

  constructor(app: App) {
    this.app = app;
    this.aplication = this.app.getInstance();
  }

  initServer(): void {
    this.aplication.listen(this.aplication.get("PORT"), () => {
      console.log("⚡ Server on Port " + this.aplication.get("PORT"));
    });
  }
}
