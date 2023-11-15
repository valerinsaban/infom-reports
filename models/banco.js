import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Profesion from './profesion.js';
import EstadoCivil from './estadoCivil.js';

let Banco = conn.define('bancos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  siglas: Sequelize.STRING,
  r_nombre: Sequelize.STRING,
  r_apellido: Sequelize.STRING,
  fecha_nacimiento: Sequelize.STRING,
  dpi: Sequelize.STRING,
  notario_autoriza: Sequelize.STRING,
  acta_notarial: Sequelize.STRING,
  fecha_acta_notarial: Sequelize.STRING,
  libro: Sequelize.STRING,
  folio: Sequelize.STRING,
  id_profesion: Sequelize.INTEGER,
  id_estado_civil: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


Banco.belongsTo(Profesion, { foreignKey: 'id_profesion', as: 'profesion' });
Profesion.hasMany(Banco, { foreignKey: 'id_profesion', as: 'bancos' });

Banco.belongsTo(EstadoCivil, { foreignKey: 'id_estado_civil', as: 'estado_civil' });
EstadoCivil.hasMany(Banco, { foreignKey: 'id_estado_civil', as: 'bancos' });

export default Banco;