import express from "express";

class App {
  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  middleware(){
    this.app.use(express.json())
  }

  routes() {

  }
}

export default new App().app