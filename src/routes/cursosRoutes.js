const express = require("express");
const router = express.Router();

// se você usa banco, adapte aqui
const db = require("../config/database");

router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM cursos");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensagem: "Erro ao buscar cursos" });
    }
});

module.exports = router;