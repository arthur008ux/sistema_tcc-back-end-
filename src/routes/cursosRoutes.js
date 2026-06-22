const express = require("express");
const router = express.Router();

const CursosController = require("../controllers/cursosController");

router.get("/", CursosController.listar);

router.post("/", CursosController.criar);

router.delete("/:id", CursosController.deletar);

module.exports = router;