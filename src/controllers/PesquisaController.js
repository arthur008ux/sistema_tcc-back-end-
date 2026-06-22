class PesquisaController {

    async buscar(req, res) {

        try {

            const { matricula } = req.params;

            const resultado =
                await PesquisaService.buscarPorMatricula(matricula);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Nenhum TCC encontrado"
                });
            }

            return res.status(200).json({
                sucesso: true,
                dados: resultado
            });

        } catch (error) {

            return res.status(500).json({
                sucesso: false,
                mensagem: error.message
            });

        }
    }
}

module.exports = new PesquisaController();