const AlunoService =
require("../services/AlunoService");

class AlunoController {

    async listar(req, res) {

        try {

            const alunos =
            await AlunoService.listar();

            return res.status(200).json(alunos);

        } catch (error) {

            return res.status(500).json({
                mensagem: error.message
            });

        }
    }

    async criar(req, res) {

        try {

            const aluno =
            await AlunoService.criar(
                req.body
            );

            return res.status(201).json({
                mensagem:
                "Aluno cadastrado com sucesso",
                aluno
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }

    async deletar(req, res) {

        try {

            await AlunoService.deletar(
                req.params.id
            );

            return res.status(200).json({
                mensagem:
                "Aluno removido com sucesso"
            });

        } catch (error) {

            return res.status(400).json({
                mensagem: error.message
            });

        }
    }
async buscarPorId(req, res) {

    try {

        const aluno =
        await AlunoService.buscarPorId(
            req.params.id
        );

        return res.status(200).json(
            aluno
        );

    } catch (error) {

        return res.status(404).json({
            mensagem: error.message
        });

    }

}

async atualizar(req, res) {

    try {

        await AlunoService.atualizar(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            mensagem:
            "Aluno atualizado com sucesso"
        });

    } catch (error) {

        return res.status(400).json({
            mensagem: error.message
        });

    }

}
}

module.exports = new AlunoController();