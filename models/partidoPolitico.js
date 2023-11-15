import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let PartidoPolitico = conn.define('partidos_politicos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default PartidoPolitico;