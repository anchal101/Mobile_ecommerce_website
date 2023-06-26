import database from '../../../config/db'
import { UUID, UUIDV4, STRING, DATE, DataTypes } from 'sequelize';

// Database connection instance
const databaseInstance = database;

// Sequelize Model
const Product = databaseInstance.define('products', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: true,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: STRING,
    allowNull: true,
  },
  quantity:{
    type:STRING,
    allowNull:true
  },
  image_url: {
    type: STRING,
    allowNull: false,
  },
  category: {
    type: STRING,
    allowNull: true,
  },
  // createdAt, lastUpdatedAt and deletedAt managed by Sequelize
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: true,
  },
  deletedAt: {
    type: DATE,
    allowNull: true,
  },
}, {
  // Auto-create timestamps
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  // Enable soft deletes
  paranoid: true,
});
export default Product