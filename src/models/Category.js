function CategoryModel(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  },
  {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });

  return Category;
}

module.exports = CategoryModel;
