import {DataTypes} from "sequelize"
import db from "../config/db.js";

import Scan from "./Scan.js";

const Qr = db.define(
  'qr',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }
);

Qr.hasMany(Scan, {
  foreingKey: 'qrId',
  sourceKey: 'id'
})

Scan.belongsTo(Qr, {
  foreingKey: 'qrId',
  targetId: 'id'
})

export default Qr;
