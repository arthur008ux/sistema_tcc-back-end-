const db = require("../config/database");

class TccRepository {

    async listar() {

    const [rows] = await db.execute(`
        SELECT
            t.id_tcc,
            t.titulo,
            t.resumo,
            t.status,
            t.arquivo_pdf,
            t.data_cadastro,

            a.id_aluno,
            a.nome,
            a.matricula,

            c.nome_curso,

            e.nome_empresa

        FROM tcc t

        INNER JOIN aluno a
            ON t.id_aluno = a.id_aluno

        INNER JOIN curso c
            ON a.id_curso = c.id_curso

        INNER JOIN empresa e
            ON a.id_empresa = e.id_empresa
    `);

    return rows;
}

    async buscarPorId(id) {

        const [rows] = await db.execute(
            "SELECT * FROM tcc WHERE id_tcc = ?",
            [id]
        );

        return rows[0];
    }

    async criar(
        titulo,
        resumo,
        arquivo_pdf,
        id_aluno
    ) {

        const [result] = await db.execute(
            `
            INSERT INTO tcc
            (
                titulo,
                resumo,
                arquivo_pdf,
                id_aluno
            )
            VALUES (?, ?, ?, ?)
            `,
            [
                titulo,
                resumo,
                arquivo_pdf,
                id_aluno
            ]
        );

        return result;
    }

    async deletar(id) {

        const [result] = await db.execute(
            "DELETE FROM tcc WHERE id_tcc = ?",
            [id]
        );

        return result;
    }
async atualizar(
    
    id,
    titulo,
    resumo,
    status,
    id_aluno
) {

    const [result] = await db.execute(
        `
        UPDATE tcc
        SET
            titulo = ?,
            resumo = ?,
            status = ?,
            id_aluno = ?
        WHERE id_tcc = ?
        `,
        [
            titulo,
            resumo,
            status,
            id_aluno,
            id
        ]
    );

    return result;
}
}

module.exports = new TccRepository();