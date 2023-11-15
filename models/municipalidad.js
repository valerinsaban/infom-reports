import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Departamento from './departamento.js';
import Municipio from './municipio.js';
import Banco from './banco.js';
import PartidoPolitico from './partidoPolitico.js';

let Municipalidad = conn.define('municipalidades', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  direccion: Sequelize.STRING,
  correo: Sequelize.STRING,
  telefono: Sequelize.STRING,
  nit: Sequelize.STRING,
  no_cuenta: Sequelize.STRING,
  no_acta: Sequelize.STRING,
  punto_acta: Sequelize.STRING,
  fecha_acta: Sequelize.STRING,
  no_convenio: Sequelize.STRING,
  fecha_convenio: Sequelize.STRING,
  id_departamento: Sequelize.INTEGER,
  id_municipio: Sequelize.INTEGER,
  id_banco: Sequelize.INTEGER,
  id_partido_politico: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Municipalidad.belongsTo(Departamento, { foreignKey: 'id_departamento', as: 'departamento' });
Departamento.hasMany(Municipalidad, { foreignKey: 'id_departamento', as: 'municipalidades' });

Municipalidad.belongsTo(Municipio, { foreignKey: 'id_municipio', as: 'municipio' });
Municipio.hasMany(Municipalidad, { foreignKey: 'id_municipio', as: 'municipalidades' });

Municipalidad.belongsTo(Banco, { foreignKey: 'id_banco', as: 'banco' });
Banco.hasMany(Municipalidad, { foreignKey: 'id_banco', as: 'municipalidades' });

Municipalidad.belongsTo(PartidoPolitico, { foreignKey: 'id_partido_politico', as: 'partido_politico' });
PartidoPolitico.hasMany(Municipalidad, { foreignKey: 'id_partido_politico', as: 'municipalidades' });

export default Municipalidad;