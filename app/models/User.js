import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.cjs';

export const User = sequelize.define('User', {
  // Define your fields here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

sequelize.sync();