import { Router } from "express";
import PetController from "../modules/pets/Pets.controller";
import validate from "../modules/middlewares/validatePet";
import ValidateToken from "../modules/middlewares/validateToken";

const petRouter = Router();

const petController = new PetController();
const validatePet = new validate();
const validateToken = new ValidateToken();

petRouter.post(
  "/create",
  validatePet.validateName,
  validatePet.validateEnergy,
  validatePet.validateImages,
  validatePet.validateDescription,
  validatePet.validateAge,
  validatePet.validateSize,
  validatePet.validateEnvironment,
  validatePet.validateRequirements,
  validatePet.validateType,
  validateToken.validate,
  petController.create
);

petRouter.get("/byOrganization", validateToken.validate, petController.findByOrganization);

petRouter.get("/:id", validateToken.validate, petController.findByID);

petRouter.get("/", validateToken.validate,petController.findAll);

petRouter.put("/:id", validateToken.validate, petController.update);

petRouter.delete("/:id", validateToken.validate, petController.delete);

export default petRouter;
