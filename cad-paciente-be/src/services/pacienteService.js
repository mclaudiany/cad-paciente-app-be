const Paciente = require('../models/paciente');

const criarPaciente = async (data) => {
  try {
    const paciente = new Paciente(data);
    await paciente.save();
    return paciente;
  } catch (error) {
    throw new Error('Erro ao criar paciente: ' + error.message);
  }
};

const listarPacientes = async () => {
  try {
    return await Paciente.find().sort({ createdAt: -1 });
  } catch (error) {
    throw new Error('Erro ao listar pacientes: ' + error.message);
  }
};

module.exports = { criarPaciente, listarPacientes };
