
import conn from '../database/conn.js';
import Sequelize from 'sequelize';
import Garantia from './garantia.js';
import Programa from './programa.js';


let ProgramaGarantia = conn.define('programas_garantias', {
  id: { type: Sequelize.SMALLINT, primaryKey: true },
  id_garantia: Sequelize.INTEGER,
  id_programa: Sequelize.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true
});

ProgramaGarantia.belongsTo(Garantia, { foreignKey: 'id_garantia', as: 'garantia' });
Garantia.hasMany(ProgramaGarantia, { foreignKey: 'id_garantia', as: 'programas_garantias' });

ProgramaGarantia.belongsTo(Programa, { foreignKey: 'id_programa', as: 'programa' });
Programa.hasMany(ProgramaGarantia, { foreignKey: 'id_programa', as: 'programas_garantias' });

export default ProgramaGarantia;