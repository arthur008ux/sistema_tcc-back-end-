class PesquisaService {

    async buscarPorMatricula(matricula) {

        if (!matricula) {
            throw new Error("Matrícula obrigatória");
        }

        const resultado =
            await PesquisaRepository.buscarPorMatricula(matricula);

        if (!resultado) {
            return null;
        }

        return resultado;
    }
}

module.exports = new PesquisaService();