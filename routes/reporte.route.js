import { Sequelize, Op } from "sequelize";
import cf from "../middleware/filtros.js";
import Departamento from "../models/departamento.js";
import Municipalidad from "../models/municipalidad.js";
import Municipio from "../models/municipio.js";
import Prestamo from "../models/prestamo.js";
import Programa from "../models/programa.js";
import TipoPrestamo from "../models/tipoPrestamo.js";
import Usuario from "../models/usuario.js";
import Movimiento from "../models/movimiento.js";
import Recibo from "../models/recibo.js";
import Factura from "../models/factura.js";

function reporte(app) {

  app.get('/reportes/prestamos/analizados/:fecha_inicio/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
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

  app.get('/reportes/prestamos/otorgados/:fecha_inicio/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
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

  app.get('/reportes/prestamos/amortizaciones-detalles/:mes/:fecha_fin/:id_tipo_prestamo/:id_programa/:id_municipalidad/:id_usuario', async (req, res) => {
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

  app.get('/reportes/prestamos/balance-general/:fecha', async (req, res) => {
    try {
      let prestamos = await Prestamo.findAll({ 
        where: { estado: 'Acreditado' },
        include: [
          { model: Movimiento, as: 'movimientos' }
        ]
      });
      prestamos = JSON.parse(JSON.stringify(prestamos));
      for (let i = 0; i < prestamos.length; i++) {
        prestamos[i].entregado = 0;
        prestamos[i].recuperado = 0;
        for (let m = 0; m < prestamos[i].movimientos.length; m++) {
          prestamos[i].entregado += parseFloat(prestamos[i].movimientos[m].cargo);
          prestamos[i].recuperado += parseFloat(prestamos[i].movimientos[m].abono);
        }
        prestamos[i].margen = prestamos[i].monto - prestamos[i].entregado
        prestamos[i].saldo = prestamos[i].movimientos[prestamos[i].movimientos.length - 1].saldo_final;
        prestamos[i].fecha_ultimo_movimiento = prestamos[i].movimientos[prestamos[i].movimientos.length - 1].fecha;
      }

      let programas = await Programa.findAll({});
      programas = JSON.parse(JSON.stringify(programas));

      for (let p = 0; p < programas.length; p++) {
        programas[p].entregado = 0;
        programas[p].recuperado = 0;
        programas[p].margen = 0;
        programas[p].saldo = 0;

        let departamentos = await Departamento.findAll({
          include: [
            {
              model: Municipalidad, as: 'municipalidades',
              include: [
                { model: Municipio, as: 'municipio', }
              ]
            }
          ]
        });
        departamentos = JSON.parse(JSON.stringify(departamentos));

        for (let d = 0; d < departamentos.length; d++) {
          departamentos[d].entregado = 0;
          departamentos[d].recuperado = 0;
          departamentos[d].margen = 0;
          departamentos[d].saldo = 0;

          for (let m = 0; m < departamentos[d].municipalidades.length; m++) {
            departamentos[d].municipalidades[m].prestamos = [];

            departamentos[d].municipalidades[m].entregado = 0;
            departamentos[d].municipalidades[m].recuperado = 0;
            departamentos[d].municipalidades[m].margen = 0;
            departamentos[d].municipalidades[m].saldo = 0;

            for (let i = 0; i < prestamos.length; i++) {
              if (prestamos[i].id_municipalidad == departamentos[d].municipalidades[m].id && prestamos[i].id_programa == programas[p].id) {
                departamentos[d].municipalidades[m].prestamos.push(prestamos[i]);

                programas[p].entregado += prestamos[i].entregado;
                programas[p].recuperado += prestamos[i].recuperado;
                programas[p].margen += prestamos[i].margen;
                programas[p].saldo += prestamos[i].saldo;

                departamentos[d].entregado += prestamos[i].entregado;
                departamentos[d].recuperado += prestamos[i].recuperado;
                departamentos[d].margen += prestamos[i].margen;
                departamentos[d].saldo += prestamos[i].saldo;

                departamentos[d].municipalidades[m].entregado += prestamos[i].entregado;
                departamentos[d].municipalidades[m].recuperado += prestamos[i].recuperado;
                departamentos[d].municipalidades[m].margen += prestamos[i].margen;
                departamentos[d].municipalidades[m].saldo += prestamos[i].saldo;
              }
            }

            if (departamentos[d].municipalidades[m].prestamos.length == 0) {
              departamentos[d].municipalidades.splice(m, 1);
              m--;
            }

          }

          if (departamentos[d].municipalidades.length == 0) {
            departamentos.splice(d, 1);
            d--;
          }

        }

        programas[p].departamentos = departamentos;

        if (departamentos.length == 0) {
          programas.splice(p, 1);
          p--;
        }

      }
      res.status(200).json(programas);
    } catch (err) {
      console.log(err);
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

  app.get('/reportes/recibos/:fecha_inicio/:fecha_fin', async (req, res) => {
    try {
      let range = { [Op.between]: [req.params.fecha_inicio, req.params.fecha_fin] };

      let recibos = await Recibo.findAll({ 
        where: { fecha: range }
      });
      res.status(200).json(recibos);
    } catch (err) {
      console.log(err);
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

  app.get('/reportes/facturas/:fecha_inicio/:fecha_fin', async (req, res) => {
    try {
      let range = { [Op.between]: [req.params.fecha_inicio, req.params.fecha_fin] };

      let facturas = await Factura.findAll({ 
        where: { fecha: range }
      });
      res.status(200).json(facturas);
    } catch (err) {
      console.log(err);
      res.status(200).json({ resultado: false, mensaje: err });
    }
  });

} export default reporte;