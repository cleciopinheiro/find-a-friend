import { Router } from "express";
import UserController from "../modules/user/User.controller";
import validate from "../modules/middlewares";

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  "/login",
  validate.validateEmail,
  validate.validatePassword,
  validate.validateGoogleLogin,
  userController.login
);
userRouter.post(
  "/create",
  validate.validateName,
  validate.validateEmail,
  validate.validatePassword,
  userController.create
);

export default userRouter;
