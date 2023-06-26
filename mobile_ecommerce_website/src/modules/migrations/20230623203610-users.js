'use strict';
const { logger } = require('../../logger');
module.exports = {
  async up(queryInterface, Sequelize) {
    try{
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      token: {
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cartItemId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
      }
    })
  }catch(err){
    logger.info("Error in creating userTable:: ",err)
  }
  },

  async down(queryInterface, sequelize) {
    try{
    await queryInterface.dropTable('users');
  }catch(err){
    logger.info("Error in reverting users migration:: ",err)
  }
  }
};
