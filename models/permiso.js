import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Rol from './rol.js';
import Menu from './menu.js';
import Submenu from './submenu.js'

let Permiso = conn.define('permisos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  accion: Sequelize.STRING,
  id_rol: Sequelize.INTEGER,
  id_menu: Sequelize.INTEGER,
  id_submenu: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Permiso.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });
Rol.hasMany(Permiso, { foreignKey: 'id_rol', as: 'permisos' });

Permiso.belongsTo(Menu, { foreignKey: 'id_menu', as: 'menu' });
Menu.hasMany(Permiso, { foreignKey: 'id_menu', as: 'permisos' });

Permiso.belongsTo(Submenu, { foreignKey: 'id_submenu', as: 'submenu' });
Submenu.hasMany(Permiso, { foreignKey: 'id_submenu', as: 'permisos' });

export default Permiso;