import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Factura = conn.define('facturas', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  numero: Sequelize.STRING,
  fecha: Sequelize.STRING,
  nit: Sequelize.STRING,
  nombre: Sequelize.STRING,
  monto: Sequelize.STRING,
  estado: Sequelize.STRING,
  autorizacion: Sequelize.STRING,
  serie_fel: Sequelize.STRING,
  numero_fel: Sequelize.STRING,
  uuid: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Factura;