import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let TipoServicio = conn.define('tipos_servicios', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  iva: Sequelize.BOOLEAN,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

export default TipoServicio;