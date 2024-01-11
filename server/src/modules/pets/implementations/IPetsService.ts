import ServiceResponse from "../../interfaces/ServiceResponse";

export default interface IPetsService {
    create(data: any): Promise<ServiceResponse>;
    findByID(id: string): Promise<ServiceResponse>;
    findAll(): Promise<ServiceResponse>;
    findByOrganization(id: string): Promise<ServiceResponse>;
    update(id: string, data: any): Promise<ServiceResponse>;
    delete(id: string): Promise<ServiceResponse>;
}