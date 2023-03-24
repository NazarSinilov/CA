const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const loginData = {
  login: "admin",  password: "admin"
};
const port = 8080;
app.post("/login", (request, response) => {  
  console.log(request.body)
  const {login, password} = request.body;
  if (!request.body) return response.status(400).send("no body")  
  if (login === loginData.login && password === loginData.password) {
    response.status(200).send(JSON.stringify({ msg: "success" }))  
  } else response.status(400).send(JSON.stringify({ msg: "failed" }))})

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));