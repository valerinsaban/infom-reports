import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Regional from './regional.js';
import Puesto from './puesto.js';
import Profesion from './profesion.js'
import EstadoCivil from './estadoCivil.js'

let Representante = conn.define('representantes', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  fecha_nacimiento: Sequelize.STRING,
  dpi: Sequelize.STRING,
  resolucion: Sequelize.STRING,
  fecha_resolucion: Sequelize.STRING,
  acuerdo: Sequelize.STRING,
  fecha_acuerdo: Sequelize.STRING,
  jd_resuelve: Sequelize.STRING,
  fecha_jd_resuelve: Sequelize.STRING,
  direccion: Sequelize.STRING,
  autorizacion: Sequelize.STRING,
  acta_toma_posecion: Sequelize.STRING,
  fecha_acta_toma_posecion: Sequelize.STRING,
  estado: Sequelize.STRING,
  imagen_carnet: Sequelize.TEXT,
  imagen_acta_toma_posecion: Sequelize.TEXT,
  imagen_dpi: Sequelize.TEXT,
  imagen_firma: Sequelize.TEXT,
  imagen_sello: Sequelize.TEXT,
  id_regional: Sequelize.INTEGER,
  id_puesto: Sequelize.INTEGER,
  id_profesion: Sequelize.INTEGER,
  id_estado_civil: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Representante.belongsTo(Regional, { foreignKey: 'id_regional', as: 'regional' });
Regional.hasMany(Representante, { foreignKey: 'id_regional', as: 'representantes' });

Representante.belongsTo(Puesto, { foreignKey: 'id_puesto', as: 'puesto' });
Puesto.hasMany(Representante, { foreignKey: 'id_puesto', as: 'representantes' });

Representante.belongsTo(Profesion, { foreignKey: 'id_profesion', as: 'profesion' });
Profesion.hasMany(Representante, { foreignKey: 'id_profesion', as: 'representantes' });

Representante.belongsTo(EstadoCivil, { foreignKey: 'id_estado_civil', as: 'estado_civil' });
EstadoCivil.hasMany(Representante, { foreignKey: 'id_estado_civil', as: 'representantes' });

export default Representante;