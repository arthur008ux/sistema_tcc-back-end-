const express = require("express");

const router = express.Router();

const upload =
require("../middleware/upload");

const TccController =
require("../controllers/TccController");

router.get(
    "/",
    TccController.listar
);

router.get(
    "/:id",
    TccController.buscarPorId
);

router.post(
    "/",
    upload.single("arquivo"),
    TccController.criar
);

router.put(
    "/:id",
    TccController.atualizar
);

router.delete(
    "/:id",
    TccController.deletar
);

module.exports = router;