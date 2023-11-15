import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Usuario from './usuario.js';
import Menu from './menu.js';

let Bitacora = conn.define('bitacoras', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  fecha: Sequelize.STRING,
  tipo: Sequelize.STRING,
  accion: Sequelize.STRING,
  descripcion: Sequelize.STRING,
  body: Sequelize.STRING,
  id_usuario: Sequelize.INTEGER,
  id_menu: Sequelize.INTEGER,
  id_submenu: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Bitacora.belongsTo(Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
Usuario.hasMany(Bitacora, { foreignKey: 'id_usuario', as: 'bitacoras' });

Bitacora.belongsTo(Menu, { foreignKey: 'id_menu', as: 'menu' });
Menu.hasMany(Bitacora, { foreignKey: 'id_menu', as: 'bitacoras' });

export default Bitacora;