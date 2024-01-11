import Organization from "../../../database/models/OrganizationsModel";
import ServiceResponse from "../../interfaces/ServiceResponse";
import IOrganizationDTO from "../DTO/IOrganizationDTO";
import IOrganizationService from "./IOrganizationService";
import * as bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default';

export default class OrganizationService implements IOrganizationService {
    async login(email: string, password: string): Promise<ServiceResponse> {
        const organization = await this.validateLogin(email, password);

        if (organization.status === 404 || organization.status === 401) {
            return organization;
        }

        const token = sign({id: organization.data.id, name: organization.data.name, isUser: false, state: organization.data.state, city: organization.data.city}, secret, { subject: organization.data.id });

        return { status: 200, data: { token: token, isUser: false } };
    }
    async create(data: IOrganizationDTO): Promise<ServiceResponse> {
        const { email, director, password, cep, address, phoneNumber, state, city } = data;

        const organizationExists = await this.findByEmail(email);

        if (organizationExists.status === 200) {
            return { status: 400, data: { message: 'Organization already exists' } };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const organization = await Organization.create({ email, director, password: hashedPassword, cep, address, phoneNumber, state, city });

        return { status: 201, data: organization };
    }
    async validateLogin(email: string, password: string): Promise<ServiceResponse> {
        const organization = await this.findByEmail(email);

        if (organization.status === 404) {
            return organization;
        }

        const passwordMatched = await bcrypt.compare(password, organization.data.password);

        if (!passwordMatched) {
            return { status: 401, data: { message: 'Incorrect email/password combination' } };
        }

        return { status: 200, data: organization.data };
    }

    async findByEmail(email: string): Promise<ServiceResponse> {
        const organization = await Organization.findOne({ where: { email } });

        if (!organization) {
            return { status: 404, data: { message: 'Organization not found' } };
        }

        return { status: 200, data: organization };
    }
}