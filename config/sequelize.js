import { Sequelize } from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

let sequelize;

switch (process.env.DB_TYPE) {
  case 'mysql':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'mysql',
    });
    break;

  case 'sqlite':
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: process.env.SQLITE_STORAGE || path.resolve('database.sqlite'),
    });
    break;

  case 'postgres':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432,
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
    });
    break;

  case 'mariadb':
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: 'mariadb',
      port: process.env.DB_PORT || 3306,
    });
    break;

  default:
    throw new Error(`Unsupported DB_TYPE: ${process.env.DB_TYPE}`);
}

export default sequelize;
