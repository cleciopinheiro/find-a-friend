import { Request, Response } from 'express';
import OrganizationService from './implementations/Organization.service';

const organizationService = new OrganizationService();

export default class OrganizationController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email, director, password, cep, address, phoneNumber, state, city } = request.body;

        const organization = await organizationService.create({ email, director, password, cep, address, phoneNumber, state, city });

        return response.status(organization.status).json(organization.data);
    }
    async login(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const organization = await organizationService.login(email, password);

        return response.status(organization.status).json(organization.data);
    }
}