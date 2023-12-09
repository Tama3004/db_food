import { responseData } from "../config/Response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
let model = initModels(sequelize);

export const getLikeByRes = async (req, res) => {
  try {
    let { resId } = req.params;
    let data = await model.like_res.findAll({
      where: {
        rest_id: resId,
      },
      include: ["user"],
    });
    responseData(res, "Thanh Cong", data, 200);
  } catch {
    responseData(res, "Loi ", "", 500);
  }
};

export const getRateByRes = async (req, res) => {
  try {
    let { resId } = req.params;
    let data = await model.rete_res.findAll({
      where: {
        rest_id: resId,
      },
      include: ["user"],
    });
    responseData(res, "Thanh Cong", data, 200);
  } catch {
    responseData(res, "Loi ", "", 500);
  }
};

export const postRate = async (req, res) => {
  const { user_id, rest_id, amount } = req.body;
  try {
    let newData = {
      user_id,
      rest_id,
      amount,
      date_rate: new Date(),
    };
    await model.rete_res.create(newData);
    responseData(res, "Thanh Cong", "", 200);
  } catch (error) {
    console.log(error);
    responseData(res, "Lỗi: " + error.message, "", 500);
  }
};

export const postOrder = async (req, res) => {
  const { user_id, food_id, amount, code_id, arr_sub_id } = req.body;
  try {
    let newData = {
      user_id,
      food_id,
      amount,
      code_id,
      arr_sub_id,
    };
    await model.orders.create(newData);
    responseData(res, "Thanh Cong", "", 200);
  } catch (error) {
    console.log(error);
    responseData(res, "Lỗi: " + error.message, "", 500);
  }
};
