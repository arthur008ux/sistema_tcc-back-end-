const db = require("../config/database"); // ou o mesmo usado nos outros controllers

const CursosController = {

    async listar(req, res) {
        try {
            const [rows] = await db.query("SELECT * FROM cursos");
            res.json(rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao buscar cursos" });
        }
    },

    async criar(req, res) {
        try {
            const { nome_curso } = req.body;

            await db.query(
                "INSERT INTO cursos (nome_curso) VALUES (?)",
                [nome_curso]
            );

            res.json({ mensagem: "Curso criado com sucesso" });

        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao criar curso" });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;

            await db.query(
                "DELETE FROM cursos WHERE id_curso = ?",
                [id]
            );

            res.json({ mensagem: "Curso deletado" });

        } catch (err) {
            console.error(err);
            res.status(500).json({ mensagem: "Erro ao deletar curso" });
        }
    }

};

module.exports = CursosController;