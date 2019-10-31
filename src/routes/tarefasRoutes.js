const express = require("express");
const router = express.Router();
const controller = require("../controllers/projController");

router.get("/", controller.get);


router.get("/:id", controller.getById);

router.get("/concluidos/filtrar", controller.getFeito);

module.exports = router;

