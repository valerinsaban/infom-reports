import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Garantia = conn.define('garantias', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  porcentaje: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Garantia;