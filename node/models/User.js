import db from '../config/db.js';
import { DataTypes } from 'sequelize';

import Qr from './Qr.js';

const User = db.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      active: {
        type: DataTypes.BOOLEAN,
      }
    }
);

User.hasMany(Qr, {
  foreignKey: 'userId',
  sourceKey: 'id'
});

Qr.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id'
});
  
export default User;
