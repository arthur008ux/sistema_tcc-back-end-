const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

// Login do administrador
router.post("/login", AuthController.login);

// Rota de teste
router.get("/teste", (req, res) => {
    res.status(200).json({
        sucesso: true,
        mensagem: "API funcionando!"
    });
});

module.exports = router;