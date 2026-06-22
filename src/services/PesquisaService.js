const PesquisaRepository =
require("../repositories/PesquisaRepository");

class PesquisaService {

    async buscarPorMatricula(matricula) {

        if (!matricula) {
            throw new Error("Matrícula obrigatória");
        }

        const resultado =
            await PesquisaRepository.buscarPorMatricula(matricula);

        return resultado;
    }
}

module.exports = new PesquisaService();