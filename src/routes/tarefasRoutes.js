const express = require("express");
const router = express.Router();
const controller = require("../controllers/projController");

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.get("/concluidos/filtrar", controller.getFeito);
router.get("/:nomeColaborador/buscar", controller.getByName);
router.get("data/filtrar", controller.getData)
router.get("diasfiltrar", controller.getDias )

module.exports = router;

