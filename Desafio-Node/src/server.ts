//imports
import express = require("express");
import 'express-async-errors';
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import bodyParser = require("body-parser");

//variaveis
const app = express();

//apps
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

//Middleware de tratamento de erros
app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error."
  })
});

//Inicializando o servidor
app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});
