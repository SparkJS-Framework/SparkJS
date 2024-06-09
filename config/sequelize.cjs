const { Sequelize } = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

let sequelize;

switch (process.env.DB_TYPE) {
  case 'mysql':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      models: [path.resolve(__dirname, '../app/models')],
    });
    break;

  case 'sqlite':
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: process.env.SQLITE_STORAGE || path.resolve('database.sqlite'),
      models: [path.resolve(__dirname, '../app/models')],
    });
    break;

  case 'postgres':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432,
      models: [path.resolve(__dirname, '../app/models')],
    });
    break;

  case 'mssql':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'mssql',
      port: process.env.DB_PORT || 1433,
      dialectOptions: {
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
      },
      models: [path.resolve(__dirname, '../app/models')],
    });
    break;

  case 'mariadb':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'mariadb',
      port: process.env.DB_PORT || 3306,
      models: [path.resolve(__dirname, '../app/models')],
    });
    break;

  default:
    throw new Error(`Unsupported DB_TYPE: ${process.env.DB_TYPE}`);
}

module.exports = sequelize;
