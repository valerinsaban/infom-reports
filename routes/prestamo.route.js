import { Sequelize, Op } from "sequelize";
import cf from "../middleware/filtros.js";
import Departamento from "../models/departamento.js";
import Municipalidad from "../models/municipalidad.js";
import Municipio from "../models/municipio.js";
import Prestamo from "../models/prestamo.js";
import Programa from "../models/programa.js";
import TipoPrestamo from "../models/tipoPrestamo.js";
import Usuario from "../models/usuario.js";

function prestamo(app) {

  app.get('/prestamos/analizados/:fecha_inicio/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
    try {
      let range = { [Op.between]: [req.params.fecha_inicio, req.params.fecha_fin] };
      delete req.params.fecha_inicio;
      delete req.params.fecha_fin;
      let params = cf(req.params);
      params.fecha = range;
      let prestamos = await Prestamo.findAll({
        where: params,
        include: [
          { model: TipoPrestamo, as: 'tipo_prestamo' },
          { model: Programa, as: 'programa' },
          {
            model: Municipalidad, as: 'municipalidad',
            include: [
              { model: Departamento, as: 'departamento' },
              { model: Municipio, as: 'municipio' }
            ]
          },
          { model: Usuario, as: 'usuario' }
        ]
      });
      res.status(200).json(prestamos);
    } catch (err) {
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

  app.get('/prestamos/otorgados/:fecha_inicio/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
    try {
      let range = { [Op.between]: [req.params.fecha_inicio, req.params.fecha_fin] };
      delete req.params.fecha_inicio;
      delete req.params.fecha_fin;
      let params = cf(req.params);
      params.fecha = range;
      let prestamos = await Prestamo.findAll({
        where: params,
        include: [
          { model: TipoPrestamo, as: 'tipo_prestamo' },
          { model: Programa, as: 'programa' },
          {
            model: Municipalidad, as: 'municipalidad',
            include: [
              { model: Departamento, as: 'departamento' },
              { model: Municipio, as: 'municipio' }
            ]
          },
          { model: Usuario, as: 'usuario' }
        ]
      });
      res.status(200).json(prestamos);
    } catch (err) {
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

  app.get('/prestamos/amortizaciones-detalles/:mes/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
    try {
      let params = cf(req.params);
      params.fecha = range;
      let prestamos = await Prestamo.findAll({
        where: params,
        include: [
          { model: TipoPrestamo, as: 'tipo_prestamo' },
          { model: Programa, as: 'programa' },
          {
            model: Municipalidad, as: 'municipalidad',
            include: [
              { model: Departamento, as: 'departamento' },
              { model: Municipio, as: 'municipio' }
            ]
          },
          { model: Usuario, as: 'usuario' }
        ]
      });
      res.status(200).json(prestamos);
    } catch (err) {
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

} export default prestamo;