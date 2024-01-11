import IOrganizationDTO from "../DTO/IOrganizationDTO";
import ServiceResponse from "../../interfaces/ServiceResponse";

export default interface IOrganizationService {
    create(data: IOrganizationDTO): Promise<ServiceResponse>;
    login(email: string, password: string): Promise<ServiceResponse>;
    findByEmail(email: string): Promise<ServiceResponse>;
}