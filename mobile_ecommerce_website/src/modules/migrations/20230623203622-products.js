'use strict';
const { logger } = require('../../logger');
module.exports = {
  async up(queryInterface, Sequelize) {
    try{
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantity:{
        type:Sequelize.STRING,
        allowNull:true
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
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
    })
  }catch(err){
    logger.info("Error in creating productTable:: ",err)
  }
  },

  async down(queryInterface, sequelize) {
    try{
    await queryInterface.dropTable('products');
  }catch(err){
    logger.info("Error in reverting product migration:: ",err)
  }
  }
};
