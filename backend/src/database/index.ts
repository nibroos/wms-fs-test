import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_DIALECT } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import UnitModel from '@/models/unit.model';
import VendorModel from '@/models/vendor.model';

const sq = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: DB_DIALECT as Sequelize.Dialect,
  host: DB_HOST,
  port: Number(DB_PORT),
  timezone: '+07:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  pool: {
    max: 1000,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sq.authenticate();

export const DB = {
  Users: UserModel(sq),
  Units: UnitModel(sq),
  Vendors: VendorModel(sq),
  sq, // connection instance (RAW queries)
  Sequelize, // library
};
