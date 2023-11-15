import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import TipoPrestamo from './tipoPrestamo.js';
import Programa from './programa.js';
import Municipalidad from './municipalidad.js';
import Resolucion from './resolucion.js';
import Funcionario from './funcionario.js';
import Regional from './regional.js';
import Usuario from './usuario.js'

let Prestamo = conn.define('prestamos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  no_dictamen: Sequelize.INTEGER,
  no_convenio: Sequelize.STRING,
  no_dictamen: Sequelize.STRING,
  fecha: Sequelize.STRING,
  fecha_amortizacion: Sequelize.STRING,
  fecha_vencimiento: Sequelize.STRING,
  monto: Sequelize.STRING,
  plazo_meses: Sequelize.STRING,
  fecha_acta: Sequelize.STRING,
  tasa: Sequelize.STRING,
  periodo_gracia: Sequelize.STRING,
  destino: Sequelize.STRING,
  no_destinos: Sequelize.STRING,
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
  id_tipo_prestamo: Sequelize.INTEGER,
  id_programa: Sequelize.INTEGER,
  id_municipalidad: Sequelize.INTEGER,
  id_resolucion: Sequelize.INTEGER,
  id_funcionario: Sequelize.INTEGER,
  id_regional: Sequelize.INTEGER,
  id_usuario: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Prestamo.belongsTo(TipoPrestamo, { foreignKey: 'id_tipo_prestamo', as: 'tipo_prestamo' });
TipoPrestamo.hasMany(Prestamo, { foreignKey: 'id_tipo_prestamo', as: 'prestamos' });

Prestamo.belongsTo(Programa, { foreignKey: 'id_programa', as: 'programa' });
Programa.hasMany(Prestamo, { foreignKey: 'id_programa', as: 'prestamos' });

Prestamo.belongsTo(Municipalidad, { foreignKey: 'id_municipalidad', as: 'municipalidad' });
Municipalidad.hasMany(Prestamo, { foreignKey: 'id_municipalidad', as: 'prestamos' });

Prestamo.belongsTo(Resolucion, { foreignKey: 'id_resolucion', as: 'resolucion' });
Resolucion.hasMany(Prestamo, { foreignKey: 'id_resolucion', as: 'prestamos' });

Prestamo.belongsTo(Funcionario, { foreignKey: 'id_funcionario', as: 'funcionario' });
Funcionario.hasMany(Prestamo, { foreignKey: 'id_funcionario', as: 'prestamos' });

Prestamo.belongsTo(Regional, { foreignKey: 'id_regional', as: 'regional' });
Regional.hasMany(Prestamo, { foreignKey: 'id_regional', as: 'prestamos' });

Prestamo.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
Usuario.hasMany(Prestamo, { foreignKey: 'id_usuario', as: 'prestamos' });


export default Prestamo;