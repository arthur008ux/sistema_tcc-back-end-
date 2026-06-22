class PesquisaService {

    async buscarPorMatricula(matricula) {

        if (!matricula) {
            throw new Error("Matrícula obrigatória");
        }

        const resultado =
            await PesquisaRepository.buscarPorMatricula(matricula);

        return resultado || null;
    }
}

module.exports = new PesquisaService();