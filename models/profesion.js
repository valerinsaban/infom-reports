import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Profesion = conn.define('profesiones', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Profesion;