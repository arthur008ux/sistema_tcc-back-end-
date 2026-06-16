const express = require("express");

const router = express.Router();

const PesquisaController =
require("../controllers/PesquisaController");

router.get(
    "/:matricula",
    PesquisaController.buscar
);

module.exports = router;