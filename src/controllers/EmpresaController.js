const EmpresaService =
require("../services/EmpresaService");

class EmpresaController {

    async listar(req, res) {

        try {

            const empresas =
            await EmpresaService.listar();

            return res.status(200).json(empresas);

        } catch (error) {

            return res.status(500).json({
                mensagem: error.message
            });

        }
    }

    async criar(req, res) {

        try {

            const empresa =
            await EmpresaService.criar(
                req.body
            );

            return res.status(201).json({
                mensagem:
                "Empresa cadastrada com sucesso",
                empresa
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }

    async deletar(req, res) {

        try {

            await EmpresaService.deletar(
                req.params.id
            );

            return res.status(200).json({
                mensagem:
                "Empresa removida com sucesso"
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }
}

module.exports = new EmpresaController();