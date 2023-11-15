import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Factura from './factura.js';

let FacturaDetalle = conn.define('facturas_detalles', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  cantidad: Sequelize.STRING,
  tipo: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  precio_unitario: Sequelize.STRING,
  descuentos: Sequelize.STRING,
  impuestos: Sequelize.STRING,
  subtotal: Sequelize.STRING,
  id_factura: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

FacturaDetalle.belongsTo(Factura, { foreignKey: 'id_factura', as: 'factura' });
Factura.hasMany(FacturaDetalle, { foreignKey: 'id_factura', as: 'facturas_detalles' });

export default FacturaDetalle;