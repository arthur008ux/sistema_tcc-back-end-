const CursosRepository = require("../repositories/CursosRepository");

class CursosService {

    async listar() {
        return await CursosRepository.listar();
    }

    async criar(nome_curso) {
        return await CursosRepository.criar(nome_curso);
    }

    async deletar(id) {
        return await CursosRepository.deletar(id);
    }
}

module.exports = new CursosService();