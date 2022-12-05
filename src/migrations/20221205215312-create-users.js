'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_name: Sequelize.STRING,
      email: Sequelize.STRING,
      image: Sequelize.STRING,
      password: Sequelize.STRING,
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('users');
  }
};
