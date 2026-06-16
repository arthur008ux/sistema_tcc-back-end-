const db = require("../config/database");

class AlunoRepository {

    async listar() {

        const [rows] = await db.execute(`
            SELECT
                a.*,
                c.nome_curso,
                e.nome_empresa
            FROM aluno a
            INNER JOIN curso c
                ON a.id_curso = c.id_curso
            INNER JOIN empresa e
                ON a.id_empresa = e.id_empresa
        `);

        return rows;
    }

    async buscarPorId(id) {

        const [rows] = await db.execute(
            "SELECT * FROM aluno WHERE id_aluno = ?",
            [id]
        );

        return rows[0];
    }

    async buscarPorMatricula(matricula) {

        const [rows] = await db.execute(
            "SELECT * FROM aluno WHERE matricula = ?",
            [matricula]
        );

        return rows[0];
    }

    async buscarPorEmail(email) {

        const [rows] = await db.execute(
            "SELECT * FROM aluno WHERE email = ?",
            [email]
        );

        return rows[0];
    }

    async criar(
        nome,
        matricula,
        email,
        id_curso,
        id_empresa
    ) {

        const [result] = await db.execute(
            `INSERT INTO aluno
            (
                nome,
                matricula,
                email,
                id_curso,
                id_empresa
            )
            VALUES (?, ?, ?, ?, ?)`,
            [
                nome,
                matricula,
                email,
                id_curso,
                id_empresa
            ]
        );

        return result;
    }

    async deletar(id) {

        const [result] = await db.execute(
            "DELETE FROM aluno WHERE id_aluno = ?",
            [id]
        );

        return result;
    }
async atualizar(
    id,
    nome,
    matricula,
    email,
    id_curso,
    id_empresa
) {

    const [result] = await db.execute(
        `
        UPDATE aluno
        SET
            nome = ?,
            matricula = ?,
            email = ?,
            id_curso = ?,
            id_empresa = ?
        WHERE id_aluno = ?
        `,
        [
            nome,
            matricula,
            email,
            id_curso,
            id_empresa,
            id
        ]
    );

    return result;
}
}



module.exports = new AlunoRepository();