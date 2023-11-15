import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Resolucion = conn.define('resoluciones', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  numero: Sequelize.STRING,
  fecha: Sequelize.STRING,
  articulos: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Resolucion;