const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


exports.getAllEmpresas = (req, res) => {
	// Traer todas las empresas
	db.Empresas.findAll({}).then(empresas => {
		return res.status(200).send(empresas);
	}, err => {
		return res.status(500).send(err);
	});
}


exports.getFechasNot = (req, res) => {
	// Traer las fechas que no tiene esa empresa
    db.Empresas.findOne({where: { nombre: req.params.empresa }, include: [{ model: db.Dias }]}).then(empresas => {
        console.log(empresa.Dias);
          const dias = empresa.Dias.map(function(x) {
            return { [Op.ne]: x.id };
          });
          console.log(dias);
          db.Fechas.findAll({ where: { 
            DiaId: 
              { [Op.and]: dias
            } 
          }}).then(function(fechasNot) {
        return res.status(200).send(fechasNot);
    }, err => {
        return res.status(500).send(err);
    });
    });
}

// Mostrar los horarios disponibles para esta empresa y dia
exports.getCitasFechaEmpresa = (req, res) => {
	// Traer todas las empresas
	db.Citas.findAll({ where: { empresa: req.params.empresa, fecha: req.params.fecha } }).then(horarios => {
		return res.status(200).send(horarios);
	}, err => {
		return res.status(500).send(err);
	});
}

