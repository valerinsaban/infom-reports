import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Prestamo from './prestamo.js';

let OrdenPago = conn.define('ordenes_pagos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  numero: Sequelize.STRING,
  no_desembolso: Sequelize.STRING,
  fecha: Sequelize.STRING,
  monto: Sequelize.STRING,
  no_recibo: Sequelize.STRING,
  no_acta: Sequelize.STRING,
  punto_acta: Sequelize.STRING,
  fecha_acta: Sequelize.STRING,
  id_prestamo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

OrdenPago.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(OrdenPago, { foreignKey: 'id_prestamo', as: 'ordenes_pagos' });

export default OrdenPago;