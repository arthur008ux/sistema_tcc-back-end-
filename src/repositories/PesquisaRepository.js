const db = require("../config/database");

class PesquisaRepository {

    async buscarPorMatricula(matricula) {

        const [rows] = await db.execute(
            `
            SELECT

                a.nome,
                a.matricula,
                a.email,

                c.nome_curso,
                e.nome_empresa,

                t.id_tcc,
                t.titulo,
                t.resumo,
                t.status,
                t.arquivo_pdf,
                t.data_cadastro

            FROM aluno a

            INNER JOIN curso c
                ON a.id_curso = c.id_curso

            INNER JOIN empresa e
                ON a.id_empresa = e.id_empresa

            LEFT JOIN tcc t
                ON a.id_aluno = t.id_aluno

            WHERE a.matricula = ?
            `,
            [matricula]
        );

        return rows[0] || null;
    }
}

module.exports = new PesquisaRepository();