import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Programa = conn.define('programas', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  codigo: Sequelize.STRING,
  nombre: Sequelize.STRING,
  siglas: Sequelize.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Programa;