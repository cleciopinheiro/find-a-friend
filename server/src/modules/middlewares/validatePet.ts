import { Request, Response, NextFunction } from 'express';

export default class ValidatePet {
    async validateName(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { name } = request.body;

        if (!name) {
            return response.status(400).json({ message: 'Name is required' });
        }

        next();
    }

    async validateEnergy(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { energy } = request.body;

        if (!energy) {
            return response.status(400).json({ message: 'Energy is required' });
        }

        next();
    }

    async validateImages(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { images } = request.body;    

        if (images.length < 1) {
            return response.status(400).json({ message: 'Images are required' });
        }

        next();
    }

    async validateDescription(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { description } = request.body;

        if (!description) {
            return response.status(400).json({ message: 'Description is required' });
        }

        next();
    }

    async validateAge(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { age } = request.body;

        if (!age) {
            return response.status(400).json({ message: 'Age is required' });
        }

        next();
    }

    async validateSize(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { size } = request.body;

        if (!size) {
            return response.status(400).json({ message: 'Size is required' });
        }

        next();
    }

    async validateEnvironment(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { environment } = request.body;

        if (!environment) {
            return response.status(400).json({ message: 'Environment is required' });
        }

        next();
    }

    async validateRequirements(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { requirements } = request.body;

        if (!requirements) {
            return response.status(400).json({ message: 'Requirements are required' });
        }

        next();
    }

    async validateType(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { type } = request.body;

        if (!type) {
            return response.status(400).json({ message: 'Type is required' });
        }

        next();
    }
}