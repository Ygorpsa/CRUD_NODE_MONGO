const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//PI Schema

const PISchema = new Schema({
  name: {
    type: String,
    required: [true, "*Campo obrigatório"],
  },
  details: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  //TODO: geo location
});

// criar Modelo_PI baseado em PISchema: 'PontosInteresse' -> nome da coleção

const PI = mongoose.model("PontosInteresse", PISchema);

// exportar Modelo_PI
module.exports = PI;
