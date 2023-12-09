import express from "express";
import {
  getLikeByRes,
  getRateByRes,
  postOrder,
  postRate,
} from "../controller/foodController.js";
import food from "../models/food.js";

const foodRoute = express.Router();

foodRoute.get("/get-like-by-res/:resId", getLikeByRes);
foodRoute.get("/get-rate-by-res/:resId", getRateByRes);
foodRoute.post("/post-rate", postRate);
foodRoute.post("/order", postOrder);
export default foodRoute;
