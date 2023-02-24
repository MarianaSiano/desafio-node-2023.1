import express = require("express");

const app = express();

app.use(express.json());


app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});
