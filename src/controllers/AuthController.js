const AuthService = require("../services/AuthService");

class AuthController {

    async login(req, res) {

        try {

            const { usuario, senha } = req.body;

            const admin =
                await AuthService.login(
                    usuario,
                    senha
                );

            return res.status(200).json({
                sucesso: true,
                admin
            });

        } catch (error) {

            return res.status(401).json({
                sucesso: false,
                mensagem: error.message
            });

        }
    }
}

module.exports = new AuthController();