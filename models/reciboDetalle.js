import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Recibo from './recibo.js';

let ReciboDetalle = conn.define('recibos_detalles', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  cantidad: Sequelize.STRING,
  tipo: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  precio_unitario: Sequelize.STRING,
  descuentos: Sequelize.STRING,
  impuestos: Sequelize.STRING,
  subtotal: Sequelize.STRING,
  id_recibo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

ReciboDetalle.belongsTo(Recibo, { foreignKey: 'id_recibo', as: 'recibo' });
Recibo.hasMany(ReciboDetalle, { foreignKey: 'id_recibo', as: 'recibos_detalles' })

export default ReciboDetalle;