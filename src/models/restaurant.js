import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class restaurant extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    rest_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rest_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    describes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'restaurant',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rest_id" },
        ]
      },
    ]
  });
  }
}
