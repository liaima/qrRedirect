import {DataTypes} from "sequelize"
import db from "../config/db.js";

const Scan = db.define(
  'scan',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ip: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    region: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    }
  },
  {
    timestamps: false
  }
);

export default Scan;
