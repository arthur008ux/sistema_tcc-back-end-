const AlunoRepository =
require("../repositories/AlunoRepository");

class AlunoService {

    async listar() {
        return await AlunoRepository.listar();
    }

    async criar(dados) {

        const {
            nome,
            matricula,
            email,
            id_curso,
            id_empresa
        } = dados;

        if (
            !nome ||
            !matricula ||
            !email ||
            !id_curso ||
            !id_empresa
        ) {
            throw new Error(
                "Todos os campos são obrigatórios"
            );
        }

        const matriculaExistente =
        await AlunoRepository.buscarPorMatricula(
            matricula
        );

        if (matriculaExistente) {
            throw new Error(
                "Matrícula já cadastrada"
            );
        }

        const emailExistente =
        await AlunoRepository.buscarPorEmail(
            email
        );

        if (emailExistente) {
            throw new Error(
                "Email já cadastrado"
            );
        }

        return await AlunoRepository.criar(
            nome,
            matricula,
            email,
            id_curso,
            id_empresa
        );
    }

    async deletar(id) {

        const aluno =
        await AlunoRepository.buscarPorId(id);

        if (!aluno) {
            throw new Error(
                "Aluno não encontrado"
            );
        }

        return await AlunoRepository.deletar(id);
    }
async buscarPorId(id) {

    const aluno =
    await AlunoRepository.buscarPorId(id);

    if (!aluno) {
        throw new Error(
            "Aluno não encontrado"
        );
    }

    return aluno;
}
async atualizar(id, dados) {

    const aluno =
    await AlunoRepository.buscarPorId(id);

    if (!aluno) {
        throw new Error(
            "Aluno não encontrado"
        );
    }

    const {
        nome,
        matricula,
        email,
        id_curso,
        id_empresa
    } = dados;

    if (
        !nome ||
        !matricula ||
        !email ||
        !id_curso ||
        !id_empresa
    ) {
        throw new Error(
            "Todos os campos são obrigatórios"
        );
    }

    return await AlunoRepository.atualizar(
        id,
        nome,
        matricula,
        email,
        id_curso,
        id_empresa
    );
}
}

module.exports = new AlunoService();