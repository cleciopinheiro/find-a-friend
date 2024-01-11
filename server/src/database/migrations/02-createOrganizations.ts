import { Model, QueryInterface, DataTypes } from "sequelize";
import IOrganization from "../Interfaces/IOrganization";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IOrganization>>("organizations", {
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
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "phone_number",
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("organizations");
  },
};
