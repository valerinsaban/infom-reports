import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Rol = conn.define('roles', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  color: Sequelize.STRING,
  
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Rol;