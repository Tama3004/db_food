import express from "express";
import foodRoute from "./foodRoutes.js";
const rootRoute = express.Router();

rootRoute.use("/food", foodRoute);
export default rootRoute;
