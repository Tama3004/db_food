import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class rete_res extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    rest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'restaurant',
        key: 'rest_id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_rate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rete_res',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "rest_id" },
        ]
      },
      {
        name: "rest_id",
        using: "BTREE",
        fields: [
          { name: "rest_id" },
        ]
      },
    ]
  });
  }
}
