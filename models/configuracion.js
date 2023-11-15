import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Configuracion = conn.define('configuraciones', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  logo: Sequelize.TEXT,
  portada: Sequelize.TEXT,
  nombre: Sequelize.STRING,
  correo: Sequelize.STRING,
  telefono: Sequelize.STRING,
  direccion: Sequelize.STRING,
  sitio_web: Sequelize.STRING,
  porcentaje_tasa: Sequelize.STRING,
  porcentaje_iva: Sequelize.STRING,
  periodo_fin: Sequelize.STRING

}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Configuracion; 