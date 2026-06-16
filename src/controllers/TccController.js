const TccService =
require("../services/TccService");

class TccController {

    async listar(req, res) {

        try {

            const tccs =
            await TccService.listar();

            return res.json(tccs);

        } catch (error) {

            return res.status(500).json({
                mensagem: error.message
            });

        }
    }

    async buscarPorId(req, res) {

        try {

            const tcc =
            await TccService.buscarPorId(
                req.params.id
            );

            return res.json(tcc);

        } catch (error) {

            return res.status(404).json({
                mensagem: error.message
            });

        }
    }

    async criar(req, res) {

        try {

            const resultado =
            await TccService.criar(
                req.body,
                req.file
            );

            return res.status(201).json({
                mensagem:
                "TCC cadastrado com sucesso",
                resultado
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }

    async deletar(req, res) {

        try {

            await TccService.deletar(
                req.params.id
            );

            return res.json({
                mensagem:
                "TCC removido com sucesso"
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }
async atualizar(req, res) {

    try {

        await TccService.atualizar(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            mensagem:
            "TCC atualizado com sucesso"
        });

    } catch (error) {

        return res.status(400).json({
            mensagem: error.message
        });

    }

}
}

module.exports = new TccController();