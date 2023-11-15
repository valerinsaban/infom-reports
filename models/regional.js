import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Regional = conn.define('regionales', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  direccion: Sequelize.STRING,
  telefono: Sequelize.STRING,
  correo: Sequelize.STRING,
  encargado: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Regional;