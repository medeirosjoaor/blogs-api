function UserModel(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  }
  );

  return User;
}

module.exports = UserModel;
