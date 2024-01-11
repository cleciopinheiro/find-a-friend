import { Ambiente } from "../../../database/enums/AmbienteEnum"
import { Energia } from "../../../database/enums/EnergiaEnum"
import { Idade } from "../../../database/enums/IdadeEnum"
import { Independencia } from "../../../database/enums/IndependenciaEnum"
import { Porte } from "../../../database/enums/PorteEnum"



export default interface IPetsDTO {
    name: string;
    energy: Energia;
    images: string[];
    description: string;
    age: Idade;
    size: Porte;
    environment: Ambiente;
    requirements: string[];
    type: Independencia;
    state: string
    city: string;
    organizationId: string;
}