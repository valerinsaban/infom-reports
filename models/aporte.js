import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Importe from './importe.js';

let Aporte = conn.define('aportes', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  mes: Sequelize.STRING,
  constitucional: Sequelize.STRING,
  iva_paz: Sequelize.STRING,
  vehiculos: Sequelize.STRING,
  petroleo: Sequelize.STRING,
  total: Sequelize.STRING,
  codigo_departamento: Sequelize.STRING,
  codigo_municipio: Sequelize.STRING,
  id_importe: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Aporte.belongsTo(Importe, { foreignKey: 'id_importe', as: 'importe' });
Importe.hasMany(Aporte, { foreignKey: 'id_importe', as: 'aportes' });


export default Aporte;