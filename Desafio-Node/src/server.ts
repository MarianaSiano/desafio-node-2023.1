import express = require("express");
import { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});
