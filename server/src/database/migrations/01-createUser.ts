import { Model, QueryInterface, DataTypes } from "sequelize";
import IUser from "../Interfaces/IUserModel";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>("users", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      googleId: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "google_id",
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("users");
  },
};
