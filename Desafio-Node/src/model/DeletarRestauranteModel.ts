const deleteRestaurante = require('./model/DeletarRestauranteModel');

async function DeletarRestauranteModel(id) {
    const resultado = await deleteRestaurante({ _id: id });
    return resultado;
}

module.exports = DeletarRestauranteModel; 