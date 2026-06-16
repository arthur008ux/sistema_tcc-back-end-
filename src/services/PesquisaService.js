const PesquisaRepository =
require("../repositories/PesquisaRepository");

class PesquisaService {

    async buscarPorMatricula(matricula) {

        if (!matricula) {
            throw new Error(
                "Matrícula obrigatória"
            );
        }

        const resultado =
        await PesquisaRepository.buscarPorMatricula(
            matricula
        );

        if (!resultado) {
            throw new Error(
                "Nenhum TCC encontrado"
            );
        }

        return resultado;
    }

}

module.exports = new PesquisaService();