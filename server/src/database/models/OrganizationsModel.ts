import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import db from ".";

class OrganizationsModel extends Model<
  InferAttributes<OrganizationsModel>,
  InferCreationAttributes<OrganizationsModel>
> {
  declare id: CreationOptional<string>;
  declare director: string;
  declare email: string;
  declare password: string;
  declare cep: string;
  declare address: string;
  declare phoneNumber: string;
  declare state: string;
  declare city: string;
}

OrganizationsModel.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "phone_number",
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "organizations",
    underscored: true,
    timestamps: false,
  }
);

export default OrganizationsModel;
