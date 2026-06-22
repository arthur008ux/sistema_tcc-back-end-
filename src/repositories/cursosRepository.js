const db = require("../config/database");

class CursosRepository {

    async listar() {
        const [rows] = await db.execute(
            "SELECT * FROM curso"
        );
        return rows;
    }

    async criar(nome_curso) {
        await db.execute(
            "INSERT INTO curso (nome_curso) VALUES (?)",
            [nome_curso]
        );
    }

    async deletar(id) {
        await db.execute(
            "DELETE FROM curso WHERE id_curso = ?",
            [id]
        );
    }
}

module.exports = new CursosRepository();