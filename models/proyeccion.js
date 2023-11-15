import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Prestamo from './prestamo.js';

let Proyeccion = conn.define('proyecciones', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  mes: Sequelize.STRING,
  fecha_inicio: Sequelize.STRING,
  fecha_fin: Sequelize.STRING,
  dias: Sequelize.STRING,
  saldo_inicial: Sequelize.STRING,
  capital: Sequelize.STRING,
  interes: Sequelize.STRING,
  iva: Sequelize.STRING,
  cuota: Sequelize.STRING,
  saldo_final: Sequelize.STRING,
  disponible: Sequelize.STRING,
  id_prestamo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});


Proyeccion.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(Proyeccion, { foreignKey: 'id_prestamo', as: 'proyecciones' });


export default Proyeccion;