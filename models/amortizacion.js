import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Cobro from './cobro.js';
import Prestamo from './prestamo.js';
import Programa from './programa.js';

let Amortizacion = conn.define('amortizaciones', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  fecha_inicio: Sequelize.STRING,
  fecha_fin: Sequelize.STRING,
  mes: Sequelize.STRING,
  dias: Sequelize.INTEGER,
  saldo_inicial: Sequelize.STRING,
  capital: Sequelize.STRING,
  interes: Sequelize.STRING,
  iva: Sequelize.STRING,
  cuota: Sequelize.STRING,
  saldo_final: Sequelize.STRING,
  tasa: Sequelize.STRING,
  id_cobro: Sequelize.INTEGER,
  id_prestamo: Sequelize.INTEGER,
  id_programa: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Amortizacion.belongsTo(Cobro, { foreignKey: 'id_cobro', as: 'cobro' });
Cobro.hasMany(Amortizacion, { foreignKey: 'id_cobro', as: 'amortizaciones' });

Amortizacion.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(Amortizacion, { foreignKey: 'id_prestamo', as: 'amortizaciones' });

Amortizacion.belongsTo(Programa, { foreignKey: 'id_programa', as: 'programa' });
Programa.hasMany(Amortizacion, { foreignKey: 'id_programa', as: 'amortizaciones' });

export default Amortizacion;