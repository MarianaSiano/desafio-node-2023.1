const DeletarRestauranteModel = require('../models/DeletarRestauranteModel');

async function deletarRecurso(id) {
    const resultado = await DeletarRestauranteModel.deleteOne({ _id: id });
    return resultado;
}

module.exports = { deletarRecurso };