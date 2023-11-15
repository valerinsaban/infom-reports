import conn from '../database/conn.js';
import Sequelize from 'sequelize';

let Menu = conn.define('menus', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  url: Sequelize.STRING,
  icono: Sequelize.STRING,
  orden: Sequelize.STRING
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


export default Menu;