import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _food from  "./food.js";
import _food_type from  "./food_type.js";
import _like_res from  "./like_res.js";
import _orders from  "./orders.js";
import _restaurant from  "./restaurant.js";
import _rete_res from  "./rete_res.js";
import _sub_food from  "./sub_food.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const food = _food.init(sequelize, DataTypes);
  const food_type = _food_type.init(sequelize, DataTypes);
  const like_res = _like_res.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const restaurant = _restaurant.init(sequelize, DataTypes);
  const rete_res = _rete_res.init(sequelize, DataTypes);
  const sub_food = _sub_food.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  restaurant.belongsToMany(users, { as: 'user_id_users', through: like_res, foreignKey: "rest_id", otherKey: "user_id" });
  restaurant.belongsToMany(users, { as: 'user_id_users_rete_res', through: rete_res, foreignKey: "rest_id", otherKey: "user_id" });
  users.belongsToMany(restaurant, { as: 'rest_id_restaurants', through: like_res, foreignKey: "user_id", otherKey: "rest_id" });
  users.belongsToMany(restaurant, { as: 'rest_id_restaurant_rete_res', through: rete_res, foreignKey: "user_id", otherKey: "rest_id" });
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  like_res.belongsTo(restaurant, { as: "rest", foreignKey: "rest_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "rest_id"});
  rete_res.belongsTo(restaurant, { as: "rest", foreignKey: "rest_id"});
  restaurant.hasMany(rete_res, { as: "rete_res", foreignKey: "rest_id"});
  like_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  rete_res.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(rete_res, { as: "rete_res", foreignKey: "user_id"});

  return {
    food,
    food_type,
    like_res,
    orders,
    restaurant,
    rete_res,
    sub_food,
    users,
  };
}
