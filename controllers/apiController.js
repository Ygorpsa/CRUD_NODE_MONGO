/*Aqui estou criando o protoripo das rotas e controladores da aplicação*/

exports.test = function (req, res) {
  res.send("teste do controller ok");
};

// listando as funções do crud

//importar modelo
const PI = require("../models/PImodel");

//adicionar novo ponto de interesse
exports.create = function (req, res, next) {
  PI.create(req.body)
    .then(function (pi) {
      res.send(pi);
    })
    .catch(next);
};

//TODO: listar pontos de interesse da BD
exports.details = function (req, res) {
  res.send({ type: "GET" });
};

// TODO: adicionar novo ponto de interesse
/*exports.add = function (req, res) {
  PI.create(req.body).then(function (pi) {
    res.send(pi);
  });
};*/

// TODO: atualizar ponto de interesse
exports.update = function (req, res, next) {
  IP.findByIdAndUpdate({ _Id: req.params.id }, req.body)
    .then(function () {
      IP.findOne({ _id: req.params.id }).then(function (ip) {
        res.send(ip);
      });
    })
    .catch(next);
};

// TODO: apagar ponto de interesse
/*'_id:' ->nome da propiedade na BD
   'req.params.id' -> me devolve o parametro id na req*/
exports.delete = function (req, res, next) {
  //apaga 'pi' do BD, depois devolve 'pi' apagado ao cliente
  PI.findByIdAndRemove({ _id: req.params.id })
    .then(function (pi) {
      res.send(pi);
    })
    .catch(next);
};
