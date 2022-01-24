/**
 * @description endpoint para salvar dados do formulario
 * @link localhost:5000/
 *
 * @param { body<JSON> }
 * @returns { String }
 *
 * @author Ygor Pereira <ygor.pereira@groove.tech>
 */

// associar as dependências instaladas

// nessa parte estou ultilizando o paradigma de imposição para impor comandos.
const express = require("express");
// inicializar app express
const app = express();
// ‘END POINT INVÁLIDO!’

app.get("/", function (req, res) {
  res.send("END POINT INVÁLIDO!");
});

const bodyParser = require("body-parser");
//este meddleware deve está a cima das routes-handlers
app.use(bodyParser.json());

// todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
const api = require("./routes/api");
app.use("/api", api);

//banco de dados:
const mongoose = require("mongoose");

//ligar a BD:
mongoose.connect(
  "mongodb+srv://test:nnn@nodejscluster.wb5oe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
// confirma ligação no console

mongoose.connection.on("connected", function () {
  console.log("Connected to Database " + "test");
});

// Mensagem de Erro
mongoose.connection.on("error", (err) => {
  console.log("Database error " + err);
});

//erro no handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  //'res.status(422)' -> muda o status
  res.status(422).send({ error: err.message });
});

// servidor á escuta no porto 5000 'process.env.port': caso usemos Heroku
let port = 5000;
app.listen(process.env.port || port, () => {
  console.log("Servidor em execução no porto: " + port);
});
