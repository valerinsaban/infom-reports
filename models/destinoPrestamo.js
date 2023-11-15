import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Destino from './destino.js';
import Prestamo from './prestamo.js';

let DestinoPrestamo = conn.define('destinos_prestamos', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  descripcion: Sequelize.STRING,
  monto: Sequelize.STRING,
  id_destino: Sequelize.INTEGER,
  id_prestamo: Sequelize.INTEGER
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

DestinoPrestamo.belongsTo(Destino, { foreignKey: 'id_destino', as: 'destino' });
Destino.hasMany(DestinoPrestamo, { foreignKey: 'id_destino', as: 'destinos_prestamos' });

DestinoPrestamo.belongsTo(Prestamo, { foreignKey: 'id_prestamo', as: 'prestamo' });
Prestamo.hasMany(DestinoPrestamo, { foreignKey: 'id_prestamo', as: 'destinos_prestamos' });

export default DestinoPrestamo;