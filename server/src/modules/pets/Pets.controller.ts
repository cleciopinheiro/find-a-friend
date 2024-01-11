import { Request, Response } from "express";
import PetService from "../pets/implementations/Pets.service";

const petService = new PetService();

export default class PetController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, energy, images, description, age, size, environment, requirements, type } = request.body;
        const { state, city, id, isUser } = request.body.user;
        if (isUser) {
            return response.status(401).json({ message: "You are not authorized to create a pet" });
        }
        
        const pet = await petService.create({ name, energy, images, description, age, size, environment, requirements, type, state, city, organizationId: id });

        return response.status(pet.status).json(pet.data);
    }

    async findByID(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const pet = await petService.findByID(id);

        return response.status(pet.status).json(pet.data);
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const pets = await petService.findAll();

        return response.status(pets.status).json(pets.data);
    }

    async findByOrganization(request: Request, response: Response): Promise<Response> {
        const { id } = request.body.user;

        const pets = await petService.findByOrganization(id);

        return response.status(pets.status).json(pets.data);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, energy, images, description, age, size, environment, requirements, type } = request.body;

        const pet = await petService.update(id, { name, energy, images, description, age, size, environment, requirements, type });

        return response.status(pet.status).json(pet.data);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const pet = await petService.delete(id);

        return response.status(pet.status).json(pet.data);
    }
}