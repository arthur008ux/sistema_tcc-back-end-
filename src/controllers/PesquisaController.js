const PesquisaService =
require("../services/PesquisaService");

class PesquisaController {

    async buscar(req, res) {

        try {

            const resultado =
            await PesquisaService.buscarPorMatricula(
                req.params.matricula
            );

            return res.status(200).json({
                sucesso: true,
                dados: resultado
            });

        } catch (error) {

            return res.status(404).json({
                sucesso: false,
                mensagem: error.message
            });

        }

    }

}

module.exports = new PesquisaController();