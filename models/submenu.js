import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Menu from './menu.js';

let Submenu = conn.define('submenus', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  url: Sequelize.STRING,
  icono: Sequelize.STRING,
  orden: Sequelize.STRING,
  id_menu: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Submenu.belongsTo(Menu, { foreignKey: 'id_menu', as: 'menu' });
Menu.hasMany(Submenu, { foreignKey: 'id_menu', as: 'submenus' });


export default Submenu;