import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Prestamo from './prestamo.js'
import OrdenPago from './ordenPago.js';
import Recibo from './recibo.js'

let Movimiento = conn.define('movimientos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  fecha: Sequelize.STRING,
  saldo_inicial: Sequelize.STRING,
  cargo: Sequelize.STRING,
  abono: Sequelize.STRING,
  saldo_final: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  capital: Sequelize.STRING,
  interes: Sequelize.STRING,
  iva: Sequelize.STRING,
  id_prestamo: Sequelize.INTEGER,
  id_orden_pago: Sequelize.INTEGER,
  id_recibo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Movimiento.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(Movimiento, { foreignKey: 'id_prestamo', as: 'movimientos' });

Movimiento.belongsTo(OrdenPago, { foreignKey: 'id_orden_pago', as: 'orden_pago' });
OrdenPago.hasMany(Movimiento, { foreignKey: 'id_orden_pago', as: 'movimientos' });

Movimiento.belongsTo(Recibo, { foreignKey: 'id_recibo', as: 'recibo' });
Recibo.hasMany(Movimiento, { foreignKey: 'id_recibo', as: 'movimientos' });

export default Movimiento;