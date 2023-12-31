function PostCategoryModel(sequelize, DataTypes) {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  }

  return PostCategory;
}

module.exports = PostCategoryModel;
