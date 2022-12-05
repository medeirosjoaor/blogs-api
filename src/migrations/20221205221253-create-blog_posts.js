'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      content: Sequelize.STRING,
      published: Sequelize.DATE,
      title: Sequelize.STRING,
      updated: Sequelize.DATE
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('blog_posts');
  }
};
