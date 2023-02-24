import express from 'express'

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});

app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});
