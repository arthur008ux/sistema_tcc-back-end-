const TccRepository =
require("../repositories/TccRepository");

class TccService {

    async listar() {
        return await TccRepository.listar();
    }

    async buscarPorId(id) {

        const tcc =
        await TccRepository.buscarPorId(id);

        if (!tcc) {
            throw new Error(
                "TCC não encontrado"
            );
        }

        return tcc;
    }

    async criar(dados, arquivo) {

        const {
            titulo,
            resumo,
            id_aluno
        } = dados;

        if (!arquivo) {
            throw new Error(
                "PDF obrigatório"
            );
        }

        return await TccRepository.criar(
            titulo,
            resumo,
            arquivo.filename,
            id_aluno
        );
    }

    async deletar(id) {

        const tcc =
        await TccRepository.buscarPorId(id);

        if (!tcc) {
            throw new Error(
                "TCC não encontrado"
            );
        }

        return await TccRepository.deletar(id);
    }
async atualizar(id, dados) {

    const tcc =
    await TccRepository.buscarPorId(id);

    if (!tcc) {
        throw new Error(
            "TCC não encontrado"
        );
    }

    const {
        titulo,
        resumo,
        status,
        id_aluno
    } = dados;

    if (
        !titulo ||
        !status ||
        !id_aluno
    ) {
        throw new Error(
            "Campos obrigatórios não informados"
        );
    }

    return await TccRepository.atualizar(
        id,
        titulo,
        resumo,
        status,
        id_aluno
    );
}
}

module.exports = new TccService();