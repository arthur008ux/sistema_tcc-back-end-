const db = require("../config/database");

class AdminRepository {

    async buscarPorUsuario(usuario) {

        const [rows] = await db.execute(
            "SELECT * FROM admin WHERE usuario = ?",
            [usuario]
        );

        return rows[0];
    }
}

module.exports = new AdminRepository();