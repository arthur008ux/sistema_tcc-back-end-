const EmpresaRepository =
require("../repositories/EmpresaRepository");

class EmpresaService {

    async listar() {
        return await EmpresaRepository.listar();
    }

    async criar(dados) {

        const {
            nome_empresa,
            endereco,
            telefone
        } = dados;

        if (!nome_empresa) {
            throw new Error(
                "Nome da empresa é obrigatório"
            );
        }

        return await EmpresaRepository.criar(
            nome_empresa,
            endereco,
            telefone
        );
    }

    async deletar(id) {

        const empresa =
        await EmpresaRepository.buscarPorId(id);

        if (!empresa) {
            throw new Error(
                "Empresa não encontrada"
            );
        }

        return await EmpresaRepository.deletar(id);
    }
}

module.exports = new EmpresaService();