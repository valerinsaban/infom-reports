import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Regional from './regional.js';
import Rol from './rol.js';

let Usuario = conn.define('usuarios', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  dpi: Sequelize.STRING,
  usuario: Sequelize.STRING,
  clave: Sequelize.STRING,
  acceso: Sequelize.BOOLEAN,
  id_regional: Sequelize.INTEGER,
  id_rol: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

Usuario.belongsTo(Regional, { foreignKey: 'id_regional', as: 'regional' });
Regional.hasMany(Usuario, { foreignKey: 'id_regional', as: 'usuarios' });

Usuario.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });
Rol.hasMany(Usuario, { foreignKey: 'id_rol', as: 'usuarios' });

export default Usuario;