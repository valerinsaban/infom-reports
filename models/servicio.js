import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import TipoServicio from './tipoServicio.js';
import TipoPrestamo from './tipoPrestamo.js';
import Programa from './programa.js';
import Municipalidad from './municipalidad.js';
import Resolucion from './resolucion.js';
import Funcionario from './funcionario.js'
import Regional from './regional.js';
import Usuario from './usuario.js'


let Servicio = conn.define('servicios', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  no_dictamen: Sequelize.STRING,
  no_convenio: Sequelize.STRING,
  fecha: Sequelize.STRING,
  fecha_amortizacion: Sequelize.STRING,
  fecha_vencimiento: Sequelize.STRING,
  monto: Sequelize.STRING,
  plazo_meses: Sequelize.INTEGER,
  fecha_acta: Sequelize.STRING,
  tasa: Sequelize.DECIMAL,
  periodo_gracia: Sequelize.INTEGER,
  destino: Sequelize.STRING,
  no_destinos: Sequelize.INTEGER,
  acta: Sequelize.STRING,
  punto: Sequelize.STRING,
  fecha_memorial: Sequelize.STRING,
  certificacion: Sequelize.STRING,
  no_oficio_aj: Sequelize.STRING,
  fecha_oficio_aj: Sequelize.STRING,
  no_oficio_ger: Sequelize.STRING,
  fecha_oficio_ger: Sequelize.STRING,
  motivo_anulacion: Sequelize.STRING,
  estado: Sequelize.STRING,
  no_oficio_aj: Sequelize.STRING,
  fecha_memorial: Sequelize.STRING,
  certificacion: Sequelize.STRING,
  id_tipo_servicio: Sequelize.INTEGER,
  id_tipo_prestamo: Sequelize.INTEGER,
  id_programa: Sequelize.INTEGER,
  id_municipalidad: Sequelize.INTEGER,
  id_resolucion: Sequelize.INTEGER,
  id_funcionario: Sequelize.INTEGER,
  id_regional: Sequelize.INTEGER,
  id_usuario: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Servicio.belongsTo(TipoServicio, { foreignKey: 'id_tipo_servicio', as: 'tipo_servicio' });
TipoServicio.hasMany(Servicio, { foreignKey: 'id_tipo_servicio', as: 'servicios' });

Servicio.belongsTo(TipoPrestamo, { foreignKey: 'id_tipo_prestamo', as: 'tipo_prestamo' });
TipoPrestamo.hasMany(Servicio, { foreignKey: 'id_tipo_prestamo', as: 'servicios' });

Servicio.belongsTo(Programa, { foreignKey: 'id_programa', as: 'programa' });
Programa.hasMany(Servicio, { foreignKey: 'id_programa', as: 'servicios' });

Servicio.belongsTo(Municipalidad, { foreignKey: 'id_municipalidad', as: 'municipalidad' });
Municipalidad.hasMany(Servicio, { foreignKey: 'id_municipalidad', as: 'servicios' });

Servicio.belongsTo(Resolucion, { foreignKey: 'id_resolucion', as: 'resolucion' });
Resolucion.hasMany(Servicio, { foreignKey: 'id_resolucion', as: 'servicios' });

Servicio.belongsTo(Funcionario, { foreignKey: 'id_funcionario', as: 'funcionario' });
Funcionario.hasMany(Servicio, { foreignKey: 'id_funcionario', as: 'servicios' });

Servicio.belongsTo(Regional, { foreignKey: 'id_regional', as: 'regional' });
Regional.hasMany(Servicio, { foreignKey: 'id_regional', as: 'servicios' });

Servicio.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
Usuario.hasMany(Servicio, { foreignKey: 'id_usuario', as: 'servicios' });

export default Servicio;