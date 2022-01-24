const express = require("express");
const router = express.Router();

// importa controlador 'apiController.js' da pasta:
// ‘../controllers/apiController’
const apiController = require("../controllers/apiController");

// o url de teste vai ser http://localhost:5000/api/teste
router.get("/teste", apiController.test);

router.get("/details", apiController.details);

router.post("/interest", apiController.create);

router.put("/interest/:id", apiController.update);

router.delete("/interest/:id", apiController.delete);

module.exports = router;
