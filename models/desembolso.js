import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Prestamo from './prestamo.js';

let Desembolso = conn.define('desembolsos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  numero: Sequelize.STRING,
  mes: Sequelize.STRING,
  monto: Sequelize.STRING,
  id_prestamo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Desembolso.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(Desembolso, { foreignKey: 'id_prestamo', as: 'desembolsos' });

export default Desembolso;