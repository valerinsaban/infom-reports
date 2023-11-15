import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Departamento from './departamento.js';

let Municipio = conn.define('municipios', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  codigo: Sequelize.STRING,
  nombre: Sequelize.STRING,
  id_departamento: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Municipio.belongsTo(Departamento, { foreignKey: 'id_departamento', as: 'departamento' });
Departamento.hasMany(Municipio, { foreignKey: 'id_departamento', as: 'municipios' });

export default Municipio;