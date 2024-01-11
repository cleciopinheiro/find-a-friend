import { Model, QueryInterface, DataTypes } from "sequelize";
import IPets from "../Interfaces/IPets";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IPets>>("pets", {
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
        allowNull: false,
        references: { model: "organizations", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "organization_id",
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("pets");
  },
};