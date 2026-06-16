const db = require("../config/database");

class EmpresaRepository {

    async listar() {

        const [rows] = await db.execute(
            "SELECT * FROM empresa"
        );

        return rows;
    }

    async buscarPorId(id) {

        const [rows] = await db.execute(
            "SELECT * FROM empresa WHERE id_empresa = ?",
            [id]
        );

        return rows[0];
    }

    async criar(nome_empresa, endereco, telefone) {

        const [result] = await db.execute(
            `INSERT INTO empresa
            (nome_empresa, endereco, telefone)
            VALUES (?, ?, ?)`,
            [nome_empresa, endereco, telefone]
        );

        return result;
    }

    async deletar(id) {

        const [result] = await db.execute(
            "DELETE FROM empresa WHERE id_empresa = ?",
            [id]
        );

        return result;
    }
}

module.exports = new EmpresaRepository();