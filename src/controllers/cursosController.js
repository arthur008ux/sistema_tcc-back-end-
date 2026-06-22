const CursosService = require("../services/cursosService");

class CursosController {

    async listar(req, res) {
        try {
            const cursos = await CursosService.listar();
            return res.json(cursos);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ mensagem: "Erro ao buscar cursos" });
        }
    }

    async criar(req, res) {
        try {
            const { nome_curso } = req.body;

            await CursosService.criar(nome_curso);

            return res.json({ mensagem: "Curso criado com sucesso" });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ mensagem: "Erro ao criar curso" });
        }
    }

    async deletar(req, res) {
        try {
            await CursosService.deletar(req.params.id);

            return res.json({ mensagem: "Curso deletado com sucesso" });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ mensagem: "Erro ao deletar curso" });
        }
    }
}

module.exports = new CursosController();