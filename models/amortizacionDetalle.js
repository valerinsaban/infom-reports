import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Amortizacion from './amortizacion.js';

let AmortizacionDetalle = conn.define('amortizaciones_detalles', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  mes: Sequelize.STRING,
  fecha_inicio: Sequelize.STRING,
  fecha_fin: Sequelize.STRING,
  dias: Sequelize.INTEGER,
  saldo_inicial: Sequelize.STRING,
  capital: Sequelize.STRING,
  interes: Sequelize.STRING,
  iva: Sequelize.STRING,
  cuota: Sequelize.STRING,
  saldo_final: Sequelize.STRING,
  tasa: Sequelize.STRING,
  id_amortizacion: Sequelize.INTEGER,

}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

AmortizacionDetalle.belongsTo(Amortizacion, { foreignKey: 'id_amortizacion', as: 'amortizacion' });
Amortizacion.hasMany(AmortizacionDetalle, { foreignKey: 'id_amortizacion', as: 'amortizaciones_detalles' });

export default AmortizacionDetalle;