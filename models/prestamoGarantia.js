import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Garantia from './garantia.js'
import Prestamo from './prestamo.js'

let PrestamoGarantia = conn.define('prestamos_garantias', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  monto: Sequelize.STRING,
  porcentaje: Sequelize.STRING,
  id_garantia: Sequelize.INTEGER,
  id_prestamo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

PrestamoGarantia.belongsTo(Garantia, { foreignKey: 'id_garantia', as: 'garantia' });
Garantia.hasMany(PrestamoGarantia, { foreignKey: 'id_garantia', as: 'prestamos_garantias' });

PrestamoGarantia.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(PrestamoGarantia, { foreignKey: 'id_prestamo', as: 'prestamos_garantias' });

export default PrestamoGarantia;