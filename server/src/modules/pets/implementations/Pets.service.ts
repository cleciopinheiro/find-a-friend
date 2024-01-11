import PetsModel from "../../../database/models/PetsModel";
import ServiceResponse from "../../interfaces/ServiceResponse";
import IPetsDTO from "../DTO/IPetsDTO";
import IPetsService from "./IPetsService";


export default class PetsService implements IPetsService {
    async create(data: IPetsDTO): Promise<ServiceResponse> {
        const { name, energy, images, description, age, size, environment, requirements, type, state, city, organizationId } = data;

        const petExists = await PetsModel.findOne({ where: { name, age, size, type, environment, energy }});

        if(petExists) {
            return { status: 400, data: { message: 'Pet already exists' } };
        }

        const createPet = await PetsModel.create({
            name,
            energy,
            images,
            description,
            age,
            size,
            environment,
            requirements,
            type,
            state,
            city,
            organizationId
        });

        return { status: 201, data: createPet };

    }

    async findByID(id: string): Promise<ServiceResponse> {
        const findById = await PetsModel.findByPk(id);

        if(!findById) {
            return { status: 404, data: { message: 'Pet not found' } };
        }
        
        return { status: 200, data: findById };

    }
    
    async findAll(): Promise<ServiceResponse> {
        const findAll = await PetsModel.findAll();

        if(!findAll) {
            return { status: 404, data: { message: 'Pets not found' } };
        }

        return { status: 200, data: findAll };
    }

    async findByOrganization(id: string): Promise<ServiceResponse> {
        const findByOrganization = await PetsModel.findAll({ where: { organizationId: id } });

        if(!findByOrganization) {
            return { status: 404, data: { message: 'Pets not found' } };
        }

        return { status: 200, data: findByOrganization };
    }
    
    async update(id: string, data: any): Promise<ServiceResponse> {
        const { name, energy, images, description, age, size, environment, requirements, type } = data;

        const petExists = await this.findByID(id);

        if(petExists.status === 404) {
            return petExists;
        }


        await PetsModel.update({
            name: name || petExists.data.name,
            energy: energy || petExists.data.energy,
            images: images || petExists.data.images,
            description: description || petExists.data.description,
            age: age || petExists.data.age,
            size: size || petExists.data.size,
            environment: environment || petExists.data.environment,
            requirements: requirements || petExists.data.requirements,
            type: type || petExists.data.type,
        }, { where: { id } });

        return { status: 204, data: { message: 'Pet updated' } };
    }

    async delete(id: string): Promise<ServiceResponse> {
        const petExists = await this.findByID(id);

        if(petExists.status === 404) {
            return petExists;
        }

        await PetsModel.destroy({ where: { id } });

        return { status: 204, data: { message: 'Pet deleted' } };
        
    }

}