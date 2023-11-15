import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Factura from './factura.js';

let Recibo = conn.define('recibos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  numero: Sequelize.STRING,
  fecha: Sequelize.STRING,
  nit: Sequelize.STRING,
  nombre: Sequelize.STRING,
  monto: Sequelize.STRING,
  estado: Sequelize.STRING,
  id_factura: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Recibo.belongsTo(Factura, { foreignKey: 'id_factura', as: 'prestamo' });
Factura.hasMany(Recibo, { foreignKey: 'id_factura', as: 'recibos' })

export default Recibo;