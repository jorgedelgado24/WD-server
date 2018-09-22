const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller');


  // Traer todas las empresas
  router.get("/agendarcita", Controller.getAllEmpresas);
  
  // Traer los dias que no vamos a esa empresa para quitarlos del calendario
  router.get("/agendarcita/:empresa", Controller.getFechasNot);

  
  // Mostrar los horarios disponibles para esta empresa y dia
  router.get("/agendarcita/:empresa/:fecha", Controller.getCitasFechaEmpresa);

  
  module.exports = router;







