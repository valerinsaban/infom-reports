import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let TipoPrestamo = conn.define('tipos_prestamos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  siglas: Sequelize.STRING,
  monto_min: Sequelize.STRING,
  monto_max: Sequelize.STRING,
  centro_costo: Sequelize.STRING,
  producto: Sequelize.STRING,
  subproducto: Sequelize.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

export default TipoPrestamo;