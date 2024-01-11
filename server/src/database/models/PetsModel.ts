import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";
import Organization from "./OrganizationsModel";
import { Ambiente } from "../enums/AmbienteEnum";
import { Energia } from "../enums/EnergiaEnum";
import { Idade } from "../enums/IdadeEnum";
import { Independencia } from "../enums/IndependenciaEnum";
import { Porte } from "../enums/PorteEnum";

class PetsModel extends Model<InferAttributes<PetsModel>, InferCreationAttributes<PetsModel>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare energy: Energia;
  declare images: string[];
  declare description: string;
  declare age: Idade;
  declare size: Porte;
  declare environment: Ambiente;
  declare requirements: string[];
  declare type: Independencia;
  declare state: string;
  declare city: string;
  declare organizationId: string;
}

PetsModel.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    energy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    environment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requirements: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organizationId: {
      type: DataTypes.UUID,
      field: "organization_id",
      allowNull: false,
      references: { model: "organizations", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    modelName: "pets",
    timestamps: false,
    underscored: true,
  }
);


Organization.hasMany(PetsModel, {
  foreignKey: "organizationId",
  as: "pets",
});

PetsModel.belongsTo(Organization, {
  foreignKey: "organizationId",
  as: "organization",
});

export default PetsModel;
