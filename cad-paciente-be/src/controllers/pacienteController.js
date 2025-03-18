const pacienteService = require('../services/pacienteService');

const criarPaciente = async (req, res) => {
  try {
    const paciente = await pacienteService.criarPaciente(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteService.listarPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarPaciente, listarPacientes };
