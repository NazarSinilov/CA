const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const data = {
  0: 'pass: admin 0',
  1: 'pass: admin 1',
  2: 'pass: admin 2',
};

const port = 8080;
app.post("/login", (request, response) => {  
  console.log(request.body)
  const {id} = request.body;
  if (!request.body) return response.status(400).send("no body")
  return response.status(200).send(JSON.stringify({data : data[id]}));

});

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));