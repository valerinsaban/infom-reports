import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Municipalidad from './municipalidad.js';
import Profesion from './profesion.js';
import EstadoCivil from './estadoCivil.js';
import Puesto from './puesto.js';

let Funcionario = conn.define('funcionarios', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  fecha_nacimiento: Sequelize.STRING,
  dpi: Sequelize.STRING,
  carnet: Sequelize.STRING,
  fecha_carnet: Sequelize.STRING,
  acta_toma_posecion: Sequelize.STRING,
  fecha_acta_toma_posecion: Sequelize.STRING,
  estado: Sequelize.STRING,
  imagen_carnet: Sequelize.TEXT,
  imagen_acta_toma_posecion: Sequelize.TEXT,
  imagen_dpi: Sequelize.TEXT,
  imagen_firma: Sequelize.TEXT,
  imagen_sello: Sequelize.TEXT,
  id_municipalidad: Sequelize.INTEGER,
  id_puesto: Sequelize.INTEGER,
  id_profesion: Sequelize.INTEGER,
  id_estado_civil: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Funcionario.belongsTo(Municipalidad, { foreignKey: 'id_municipalidad', as: 'municipalidad' });
Municipalidad.hasMany(Funcionario, { foreignKey: 'id_municipalidad', as: 'funcionarios' });

Funcionario.belongsTo(Puesto, { foreignKey: 'id_puesto', as: 'puesto' });
Puesto.hasMany(Funcionario, { foreignKey: 'id_puesto', as: 'funcionarios' });

Funcionario.belongsTo(Profesion, { foreignKey: 'id_profesion', as: 'profesion' });
Profesion.hasMany(Funcionario, { foreignKey: 'id_profesion', as: 'funcionarios' });

Funcionario.belongsTo(EstadoCivil, { foreignKey: 'id_estado_civil', as: 'estado_civil' });
EstadoCivil.hasMany(Funcionario, { foreignKey: 'id_estado_civil', as: 'funcionarios' });


export default Funcionario;