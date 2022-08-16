import express from "express";
import registerUser from "../controllers/user-controller.js";

const userRoute = express.Router();

userRoute.route("/").post(registerUser);

export default userRoute;
