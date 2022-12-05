'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      categoryId: {
        allowNull: false,
        field: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      postId: {
        allowNull: false,
        field: 'post_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('posts_categories');
  }
};
