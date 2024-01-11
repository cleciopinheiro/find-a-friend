import { Router } from "express";
import OrganizationController from "../modules/organizations/Organization.controller";
import validate from "../modules/middlewares";

const organizationRouter = Router();

const organizationController = new OrganizationController();

organizationRouter.post(
  "/create",
  validate.validateDirector,
  validate.validateEmail,
  validate.validatePassword,
  validate.validateCEP,
  organizationController.create
);

organizationRouter.post(
  "/login",
  validate.validateEmail,
  validate.validatePassword,
  organizationController.login
);

export default organizationRouter;
