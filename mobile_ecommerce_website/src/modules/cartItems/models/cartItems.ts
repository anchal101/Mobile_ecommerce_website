import database from '../../../config/db'
import { UUID, UUIDV4, STRING, DATE, INTEGER } from 'sequelize';
import User from '../../users/models/user';
import Product from '../../products/models/products';

// Database connection instance
const databaseInstance = database;

// Sequelize Model
 const CartItems = databaseInstance.define('cartItems', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: STRING,
    allowNull: true,
  },
  cartId: {
    type: STRING,
    allowNull: true,
  },
  productId: {
    type: STRING,
    allowNull: true,
  },
  quantity: {
    type: INTEGER,
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

},
  {
    // Auto-create timestamps
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    // Enable soft deletes
    paranoid: true,
  })

export default CartItems
CartItems.belongsTo(User, { as: 'users', foreignKey: 'userId' });
User.hasMany(CartItems, { as: 'cartItems', foreignKey: 'userId' });

CartItems.belongsTo(Product, { as: 'products', foreignKey: 'productId' });
Product.hasMany(CartItems, { as: 'cartItems', foreignKey: 'productId' });
