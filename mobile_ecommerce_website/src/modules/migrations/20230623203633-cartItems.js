'use strict';
const { logger } = require('../../logger');
module.exports = {
  async up(queryInterface, Sequelize) {
    try{
    await queryInterface.createTable('cartItems', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cartId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      productId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    
    });
  }catch(err){
    logger.info("Error in creating cartItems Table:: ",err)
  }
  },

  async down(queryInterface, sequelize) {
    try{
    await queryInterface.dropTable('cartItems');
  }catch(err){
    logger.info("Error in reverting cartItems migration:: ",err)
  }
  }
};
