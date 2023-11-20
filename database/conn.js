import Sequelize from 'sequelize';

let conn = new Sequelize({
  database: 'infom',
  host: '108.60.213.146',
  dialect: 'mssql',
  dialectOptions: {
    authentication: {
      type: 'ntlm',
      options: {
        userName: 'administrator',
        password: 'K@!r0s@2023.GT',
        domain: '108.60.213.146',
      },
    },
    options: {
      port: 1433,
      requestTimeout: 60000,
    }
  },
  logging: false
}); 

export default conn;
