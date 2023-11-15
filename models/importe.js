import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Importe = conn.define('importes', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  mes: Sequelize.STRING,
  fecha: Sequelize.STRING,
  observaciones: Sequelize.STRING,
  constitucional: Sequelize.STRING,
  iva_paz: Sequelize.STRING,
  vehiculos: Sequelize.STRING,
  petroleo: Sequelize.STRING,
  total: Sequelize.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Importe;