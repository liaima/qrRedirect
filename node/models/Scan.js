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
    }
  },
  {
    timestamps: false
  }
);

export default Scan;
