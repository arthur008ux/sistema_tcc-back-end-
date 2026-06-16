const AdminRepository = require("../repositories/AdminRepository");

class AuthService {

    async login(usuario, senha) {

        const admin =
            await AdminRepository.buscarPorUsuario(usuario);

        if (!admin) {
            throw new Error("Usuário não encontrado");
        }

        if (admin.senha !== senha) {
            throw new Error("Senha inválida");
        }

        return {
            id: admin.id_admin,
            usuario: admin.usuario
        };
    }
}

module.exports = new AuthService();