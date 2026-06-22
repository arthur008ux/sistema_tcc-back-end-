const PesquisaService =
require("../services/PesquisaService");

class PesquisaController {

    async buscar(req, res) {

        try {

            const { matricula } = req.params;

            const resultado =
                await PesquisaService.buscarPorMatricula(matricula);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Aluno não encontrado"
                });
            }

            return res.status(200).json({
                sucesso: true,
                dados: resultado
            });

        } catch (error) {

            console.error("ERRO PESQUISA:", error);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno no servidor"
            });
        }
    }
}

module.exports = new PesquisaController();