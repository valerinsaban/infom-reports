import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let EstadoCivil = conn.define('estados_civiles', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default EstadoCivil;