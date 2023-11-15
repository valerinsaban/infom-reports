import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Departamento = conn.define('departamentos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  codigo: Sequelize.STRING,
  nombre: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Departamento;