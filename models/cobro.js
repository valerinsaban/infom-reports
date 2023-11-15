import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Cobro = conn.define('cobros', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  codigo: Sequelize.STRING,
  fecha: Sequelize.STRING,
  mes: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Cobro;